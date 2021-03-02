import {Gender, Unit} from "../consts/common";
import {IAnimalResponse, IScheduleResponse} from "../api/responseTypes";
import moment from "moment";


export interface IAnimalBase {
  id: number;
  name: string;
  image: string;
  current: boolean;
}

export class Animal implements IAnimalBase {

  id: number;
  name: string;
  image: string;
  activityLevel: number;
  birthDate?: moment.Moment;
  bodyType: number;
  breed: string;
  gender: Gender;
  kcalCustom: number;
  kcalRecommended: number;
  weight: number;
  current: boolean = false;
  mealPlan: Array<MealTime> = [];

  constructor(response: IAnimalResponse, unit: Unit) {
    this.id = response.id;
    this.name = response.name;
    this.gender = response.gender === 1 ? Gender.female : Gender.male;
    this.image = response.image_url;
    this.activityLevel = response.activity_level;
    this.birthDate = response.birth_date ? moment(response.birth_date * 1000) : undefined;
    this.bodyType = response.body_type;
    this.breed = response.breed_name;
    this.kcalRecommended = response.caloric_requirements;
    this.kcalCustom = response.custom_kcal_per_day;
    this.weight = response.weight;
    this.mealPlan = response.schedule.map(item => new MealTime(item, unit));
  }

  get years() {
    return this.birthDate && (moment().diff(this.birthDate, 'days') / 365).toFixed(1);
  }

}

export class MealTime {

  id: number = 0;
  value: number;
  time: number;

  constructor(response?: IScheduleResponse, unit?: Unit, value?: number, time?: number) {
    if (response) {
      this.id = response.id;
      this.value = unit === Unit.gram ? response.grams : response.cups;
      this.id = response.id;
      this.time = response.time * 1000;
    } else {
      this.value = value || 0;
      this.time = time || 0;
    }
  }

  public static create(value: number, time: number): MealTime {
    return new MealTime(undefined, undefined, value, time);
  }

  get hour() {
    return Math.ceil(this.time / 3600000);
  }
}
