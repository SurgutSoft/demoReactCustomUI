import {action, makeAutoObservable} from 'mobx';
import {Unit} from 'js/consts/common';
import {UNIT} from "../consts/localStorage";


class SettingsStore {

  public unit: Unit = Unit.cup;
  public timezone?: string;


  constructor() {
    makeAutoObservable(this);
    this.unit = window.localStorage.getItem(UNIT) === Unit.gram.toString() ? Unit.gram : Unit.cup;
  }

  @action
  public setUnit = (unit: Unit) => {
    window.localStorage.setItem(UNIT, unit);
    this.unit = unit;
  }


}

export default new SettingsStore();

