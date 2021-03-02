
export interface IUserBodyResponse {
  user: IUserResponse,
}

export interface IUserResponse {
  email: string,
  first_name: string,
  last_name: string,
  mobile: string,
  timezone: string
}

export interface IStatsItemResponse {
  datetime: number,
  value: number,
  cups: string
}

export interface IAnimalsResponse {
  pets: Array<IAnimalResponse>
}

export interface IAnimalResponse {
  id: number,
  name: string,
  breed_name: string,
  image_url: string,
  weight: number,
  birth_date: number,
  gender: number,

  activity_level: number,
  body_type: number,
  neutered: false

  caloric_requirements: number,
  custom_kcal_per_day: number,

  schedule: Array<IScheduleResponse>,
  feeding_info: IFeedingInfoResponse,
}

export interface IScheduleResponse {
  id: number,
  cups: number,
  grams: number,
  local_time: number,
  time: number
}

interface IFeedingInfoResponse {
  cups: number,
  drunk_today: number,
  eaten_today: number,
  last_drink: number,
  last_meal: number,
  last_water_change: number
}

export interface IFeedersResponse {
  feeders: Array<IFeederResponse>
}

export interface IFeederResponse {
  battery_pct: number,
  name: string,
  updated_at: number,
  current_level_cups: number,
  current_level_percent: number,
  last_fed_level: number,
  feeder_type: 'f' | 'w',
  last_consume_at: number,
  last_refill_at: number,
  mac_address: string,
  fw_version: string,
  tare_weight: number,
  utc_offset: -18000
  wifi_level: number,
}