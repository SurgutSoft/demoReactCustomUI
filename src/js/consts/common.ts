export enum BowlType {
  water = 'water',
  food = 'food'
}

export enum Gender {
  male = 'male',
  female = 'female'
}

export enum Unit {
  cup = 'cup',
  gram = 'gram'
}

export enum Interval {
  day = 'day',
  week = 'week',
  month = 'month'
}

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export enum AppEvent {
  animalChanged = 'animalChanged'
}

export enum PortionDiff {
  underfed = 'underfed',
  normal = 'normal',
  overfed = 'overfed'
}

export enum Align {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export const getPortionDiff = (value: number, plan: number): PortionDiff => {
  const fed = 100 * (value - plan) / plan;
  return (fed > 15 && PortionDiff.overfed) || (fed < -15 && PortionDiff.underfed) || PortionDiff.normal;
}

export const getBodyType = (bodyType: number) => {
  switch(true) {
    case bodyType > 0 && bodyType <= 0.8: return "Very Thin";
    case bodyType > 0.8 && bodyType <= 1.2: return "Ideal Body";
    case bodyType > 1.2: return "Big Guy";
  }
}

export const getActivityType = (activity: number) => {
  switch(true) {
    case activity > 0 && activity <= 0.8: return "Low";
    case activity > 0.8 && activity <= 1.2: return "Moderate";
    case activity > 1.2: return "Very Active";
  }
}
