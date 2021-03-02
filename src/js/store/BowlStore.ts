import {action, computed, makeAutoObservable, runInAction} from 'mobx';
import {IFeedersResponse} from "../api/responseTypes";
import {apiClient} from "../api/api";
import {Bowl} from "../models/Bowl";

class BowlStore {

  public isLoading: boolean = true;
  public bowls: Array<Bowl> = [];

  constructor() {
    makeAutoObservable(this)
  }

  @action
  public fetchData = async (animalId: number) => {
    this.isLoading = true;
    try {
      const response: IFeedersResponse = await apiClient.getBowls(animalId);
      runInAction(() => {
        this.bowls = response.feeders.map(item => new Bowl(item));
      })
    } catch (e) {
      console.error("BowlStore.fetchData", e);
    }
    this.isLoading = false;
  }


  @computed
  get foodBowl(): Bowl | undefined {
    return this.bowls.find(bowl => bowl.isFood);
  }

  @computed
  get waterBowl(): Bowl | undefined {
    return this.bowls.find(bowl => bowl.isWater);
  }

}

export default new BowlStore();

