import {action, makeAutoObservable} from 'mobx';


class UIStore {

  public alertMessage?: string;
  public alertType?: 'success' | 'error';

  constructor() {
    makeAutoObservable(this);
  }

  @action
  public showSuccessAlert = (message: string) => {
    this.alertMessage = message;
    this.alertType = 'success';
  }

  @action
  public showErrorAlert = (message: string) => {
    this.alertMessage = message;
    this.alertType = 'error';
  }

  @action
  public hideAlert = () => {
    this.alertMessage = undefined;
  }

}

export default new UIStore();

