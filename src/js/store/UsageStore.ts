import {action, computed, makeAutoObservable} from 'mobx';
import moment from "moment";
import {apiClient} from '../api/api';
import {BowlType, Unit} from 'js/consts/common';
import {IStatsItemResponse} from "../api/responseTypes";
import {IUsageItem, Usage} from "../models/Usage";
import settings from "./SettingsStore";
import animalStore from "./AnimalStore";


class UsageStore {

  private type: BowlType = BowlType.food;
  private data: Array<IUsageItem> = [];
  public isLoading: boolean = false;

  constructor(type: BowlType) {
    makeAutoObservable(this)
    this.type = type;
  }

  @action
  public fetchData = async () => {
    let from = moment().add(-12, 'month');
    let to = moment();
    this.isLoading = true;
    const response: Array<IStatsItemResponse> = await apiClient.getStatistics(
      animalStore.animalId, this.type, from.unix(), to.unix());
    this.data = this.prepareFullData(response, from, to);
    this.isLoading = false;
  }

  /**
   * the method adds empty items to the array (with no usage data)
   * source: [12:00/100gm, 17:00/50gm]
   * result: [00:00/0gm, 01:00/0gm, ..., 12:00/100gm, 13:00/0gm, ...]
   */
  private prepareFullData(data: Array<IStatsItemResponse>, from: moment.Moment, to: moment.Moment) {
    let cursor = to.add(1, 'hour').startOf('hour');
    let result: Array<IUsageItem> = [];
    while (cursor.isAfter(from)) {
      cursor = cursor.add(-1, 'hours');
      const datetimeUnix = cursor.unix();
      const exists = data.find(item => item.datetime === datetimeUnix);
      result.push({
        datetime: moment(cursor),
        date: cursor.format('YYYY-MM-DD'),
        month: cursor.format('YYYY-MM-01'),
        count: 0,
        value: exists ? settings.unit === Unit.cup ? parseFloat(exists.cups + '') : exists.value : 0
      })
    }
    return result.reverse();
  }


  /**
   * get aggregated usage data by days
   */
  @computed
  private get byDayData(): Array<IUsageItem> {
    let result: Array<IUsageItem> = [];
    let cursor: IUsageItem;
    this.data.forEach(item => {
      if (!cursor || cursor.date !== item.date) {
        cursor = Object.assign({}, item);
        result.push(cursor);
      }
      cursor.value += item.value;
    });

    return result;
  }

  @computed
  public get monthData(): Array<IUsageItem> {
    if (this.byDayData.length >= 31) {
      return this.byDayData.slice(this.byDayData.length - 31, this.data.length);
    }
    return this.byDayData;
  }

  @computed
  public get weekData(): Array<IUsageItem> {
    if (this.byDayData.length >= 7) {
      return this.byDayData.slice(this.byDayData.length - 7, this.data.length);
    }
    return this.byDayData;
  }

  @computed
  public get dayData(): Array<IUsageItem> {
    if (this.data.length >= 24) {
      return this.data.slice(this.data.length - 24, this.data.length);
    }
    return this.data;
  }

  /**
   * group by month, calculate avg per month
   */
  @computed
  public get allDataByMonth(): Array<IUsageItem> {
    let result: Array<IUsageItem> = [];
    let cursor: IUsageItem;
    this.byDayData.forEach(item => {
      if (!cursor || cursor.month !== item.month) {
        cursor = Object.assign({}, item);
        result.push(cursor);
      }
      if (item.value > 0) {
        if (!cursor.count) cursor.count = 0;
        cursor.count++;
        cursor.value += item.value;
      }
    });
    result.forEach(item => item.value = item.value / (item.count || 1));
    return result;
  }

  //todo update API methodget all fields
  @computed
  public get lastUsage(): Usage | null {
    let noEmpty = this.data.filter(i => i.value > 0);
    let lastUsageItem = noEmpty.length > 0 ? noEmpty[noEmpty.length - 1] : null;
    if (lastUsageItem) {
      return new Usage(lastUsageItem.datetime, lastUsageItem.value);
    }
    return null;
  }

  sum(items: Array<IUsageItem>) {
    return items.map(i => i.value).reduce((a, b) => a + b, 0);
  }


  avg(items: Array<IUsageItem>) {
    const notEmpty = items.filter(i => i.value > 0);
    if (!notEmpty.length) return 0;
    const sum = notEmpty.map(i => i.value).reduce((a, b) => a + b, 0);
    return sum / notEmpty.length;
  }

}

export const foodUsageStore = new UsageStore(BowlType.food);
export const waterUsageStore = new UsageStore(BowlType.water);

