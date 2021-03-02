import axios from 'axios';
import qs from 'qs';
import {ACCESS_TOKEN, ACCESS_TOKEN_URL_PARAM} from "../consts/localStorage";
import {IUserResponse} from "./responseTypes";
import {BowlType} from "../consts/common";

export default function api(conf: any): Promise<any> {
  const config = conf;
  let accessToken = localStorage.getItem(ACCESS_TOKEN);
  config.headers = {Authorization: `Token ${accessToken}`};
  config.paramsSerializer = (params: object) => qs.stringify(
    params,
    {
      allowDots: true,
      arrayFormat: 'repeat',
    },
  );
  return axios(config)
    .then((response) => {
      if (response.status === 200 || response.status === 201 || response.status === 202) return response.data;
      return Promise.reject(response.data);
    });
}

class ApiClient {

  getUser = () => api({url: '/api/v1/accounts/user'});

  updateUser = (user: IUserResponse) => api({method: 'POST', url: `/api/v1/accounts/user/`, data: user})

  getAnimals = () => api({url: '/api/v1/animals/animal/'});

  getBowls = (animalId: number) => api({url: `/api/v1/animals/animal/${animalId}/feeders/`});

  getNotifications = () => api({url: '/api/v1/notifications/'});

  getStatistics = (animalId: number, type: BowlType, from: number, to: number) => {
    return api({url: `/api/v1/animals/${animalId}/statistics/?feeder_type=${type === BowlType.food ? 'f' : 'w'}&measured_from=${from}&measured_to=${to}`});
  }


  // isAuthorized = () => this.headers.Authorization != null;
  //
  // logout = () => {
  //   localStorage.clear();
  //   this.headers = {};
  // };
  //
  // auth = (mobile) => this.post('/api/v1/accounts/auth/mobile/', {mobile});
  //
  // authConfirm = (token) => {
  //   return this.post('/api/v1/accounts/callback/auth/', {token})
  //     .then(response => {
  //       this.headers.Authorization = 'Token ' + response.user.access_token;
  //       localStorage.setItem(ACCESS_TOKEN, response.user.access_token);
  //     });
  //   ;
  // };

}

const params = new URLSearchParams(new URL(window.location.href).search);
let token = params.get(ACCESS_TOKEN_URL_PARAM);
if (token) {
  localStorage.clear();
  localStorage.setItem(ACCESS_TOKEN, token);
}

export const apiClient = new ApiClient();
