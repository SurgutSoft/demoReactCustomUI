import {IUserResponse} from "../api/responseTypes";

export class User {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  timezone: string;


  constructor(response: IUserResponse) {
    this.email = response.email;
    this.firstName = response.first_name;
    this.lastName = response.last_name;
    this.phone = response.mobile;
    this.timezone = response.timezone;
  }

  public static toRequestBody(user?: User): IUserResponse {
    return {
      first_name: user?.firstName,
      last_name: user?.lastName,
      email: user?.email,
      timezone: user?.timezone,
    } as IUserResponse;
  }
}