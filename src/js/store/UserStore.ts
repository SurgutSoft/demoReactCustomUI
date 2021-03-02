import {action, computed, makeAutoObservable} from 'mobx';
import {IUserBodyResponse} from "../api/responseTypes";
import ui from './UIStore';
import {apiClient} from "../api/api";
import {User} from "../models/User";


class UserStore {

  user?: User;
  editableUser?: User;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  public fetchData = async () => {
    try {
      const response: IUserBodyResponse = await apiClient.getUser();
      this.user = new User(response.user);
      this.editableUser = Object.assign({}, this.user);
    } catch (e) {
      console.error("UserStore.fetchData", e);
    }
  }

  @computed
  get noChanges(): boolean {
    return JSON.stringify(this.user) === JSON.stringify(this.editableUser);
  }

  public save = async () => {
    try {
      this.user = Object.assign({}, this.editableUser);
      await apiClient.updateUser(User.toRequestBody(this.editableUser));
      ui.showSuccessAlert('Account has been updated')
    } catch (e) {
      ui.showErrorAlert('Update failed. Please check all fields')
      console.error("UserStore.fetchData", e);
    }
  }

  public resetChanges = () => {
    if (this.user) this.editableUser = Object.assign({}, this.user);
  }

  public onChangeField = (name: keyof User, value: any) => {
    if (this.editableUser) {
      this.editableUser[name] = value;
    }
  }
}

export default new UserStore();

