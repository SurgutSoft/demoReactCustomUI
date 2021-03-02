import moment from "moment";
import { IFeederResponse } from "../api/responseTypes";
import { BowlType } from "../consts/common";

export class Bowl {

  id: string;
  type: BowlType;
  name: string;
  updatedAt: moment.Moment;
  levelGrams: number;
  levelCups: number;
  levelPercent: number;
  battery: number;
  wifiLevel: number;
  tareWeight: number;
  version: string;

  constructor(response: IFeederResponse) {
    this.id = response.mac_address;
    this.type = response.feeder_type === 'w' ? BowlType.water : BowlType.food;
    this.name = response.name;
    this.battery = response.battery_pct;
    this.version = response.fw_version;
    this.levelGrams = response.last_fed_level;
    this.levelCups = response.current_level_cups;
    this.levelPercent = response.current_level_percent;
    this.tareWeight = response.tare_weight;
    this.wifiLevel = response.wifi_level;
    this.updatedAt = moment(response.updated_at * 1000);
  }

  public static create(params: any): Bowl {
    return Object.assign({}, params)
  }

  get isLowBattery() {
    return this.battery < 10;
  }

  get isOffline() {
    return moment().diff(this.updatedAt, 'hours') > 5;
  }

  get offlineDays() {
    return moment.duration(moment().diff(this.updatedAt)).asDays();
  }

  get isFood() {
    return this.type === BowlType.food;
  }

  get isWater() {
    return this.type === BowlType.water;
  }

  get wifiLevelTxt() {
    if (this.wifiLevel <= 1) {
      return "Poor";
    } else if (this.wifiLevel === 2) {
      return "Low";
    } else {
      return "Good";
    }
  }
}
