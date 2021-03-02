import moment from "moment";


export interface IUsageItem {
  datetime: moment.Moment;
  value: number,
  date?: string,
  month?: string,
  count?: number
}

export class Usage {

  lastConsumeAt: moment.Moment;
  lastConsumeValue: number;
  lastRefillAt?: moment.Moment;

  constructor(lastConsumeAt: moment.Moment, lastConsumeValue: number) {
    this.lastConsumeAt = lastConsumeAt;
    this.lastConsumeValue = lastConsumeValue;
  }

}