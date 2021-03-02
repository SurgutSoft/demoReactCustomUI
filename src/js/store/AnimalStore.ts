import {action, computed, makeAutoObservable, runInAction} from 'mobx';
import {ANIMAL_ID} from "../consts/localStorage";
import {IAnimalsResponse} from "../api/responseTypes";
import {apiClient} from "../api/api";
import settings from './SettingsStore';
import {Animal, IAnimalBase, MealTime} from "../models/Animal";
import {AppEvent} from "../consts/common";

class AnimalStore {

  public animalId: number = 0;
  public isLoading: boolean = true;
  public animals: Array<IAnimalBase> = [];

  constructor() {
    makeAutoObservable(this)
    let saved = window.localStorage.getItem(ANIMAL_ID);
    this.animalId = saved ? parseInt(saved) : 0;
  }


  @action
  public setAnimalId = (animalId: number) => {
    if (animalId > 0) {
      window.localStorage.setItem(ANIMAL_ID, animalId.toString());
      this.animals.forEach(a => a.current = a.id === animalId);
      const changed = this.animalId !== animalId;
      this.animalId = animalId;
      if (changed) {
        window.dispatchEvent(new Event(AppEvent.animalChanged));
        console.log('animal changed', this.animalId, ' > ', animalId);
      }
    }
  }

  @action
  public fetchData = async () => {
    this.isLoading = true;
    try {
      const response: IAnimalsResponse = await apiClient.getAnimals();
      const data = response.pets.map(item => new Animal(item, settings.unit));
      runInAction(() => {
        if (!this.animalId && data.length) this.setAnimalId(data[0].id);
        data.forEach(a => a.current = a.id === this.animalId);
        this.animals = data;
      });

    } catch (e) {
      console.error("AnimalStore.fetchData", e);
    }
    this.isLoading = false;
  }

  @computed
  get current(): Animal | null | undefined {
    if (this.animalId) {
      let findById = this.animals.find(item => item.id === this.animalId);
      return findById as Animal;
    } else {
      return null;
    }
  }

  @computed
  get mealPlan(): Array<MealTime> | undefined {
    return this.current ? this.current.mealPlan : undefined;
  }

  @computed
  get dayPortion(): number {
    if (this.current) {
      return this.current.mealPlan.map(i => i.value).reduce((a, b) => a + b, 0);
    } else {
      return 0;
    }
  }

  @computed
  get mealPortion(): number {
    return this.current ? this.current?.mealPlan[0]?.value : 0;
  }

}

export default new AnimalStore();

