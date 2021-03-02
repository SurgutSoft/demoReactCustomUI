import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import animalStore from "../../store/AnimalStore";
import bowlStore from "../../store/BowlStore";
import {foodUsageStore, waterUsageStore} from "../../store/UsageStore";
import settings from "../../store/SettingsStore";
import {DashboardDesktop} from './DashboardDesktop';
import {DashboardMobile} from './DashboardMobile';

import css from './Dashboard.module.scss';

interface IProps {
  isMobile: boolean,
  onMenuClick: () => void
}

const Dashboard = observer(({isMobile, onMenuClick}: IProps) => {
  useEffect(() => {
    animalStore.fetchData();
    bowlStore.fetchData(animalStore.animalId);
    // eslint-disable-next-line
  }, []);


  let animal = animalStore.current;

  return (
    <>
      {animal &&
        <>
          {isMobile ?
            <div className={css.dashboardMobileWrapper}>
              <DashboardMobile
                animal={animal}
                unit={settings.unit}
                onMenuClick={onMenuClick}
                foodlastUsage={foodUsageStore.lastUsage}
                waterlastUsage={waterUsageStore.lastUsage}
                mealPlan={animal.mealPlan}
                waterBowl={bowlStore.waterBowl}
                foodBowl={bowlStore.foodBowl}
                mealPortion={animalStore.mealPortion}
              />
            </div>
            :
            <div className={css.dashboardDeskWrapper}>
              <DashboardDesktop
                animal={animal}
                unit={settings.unit}
                foodlastUsage={foodUsageStore.lastUsage}
                waterlastUsage={waterUsageStore.lastUsage}
                mealPlan={animal.mealPlan}
                isMobile={isMobile}
                waterBowl={bowlStore.waterBowl}
                foodBowl={bowlStore.foodBowl}
                mealPortion={animalStore.mealPortion}
              />
            </div>
          }
        </>
      }
    </>
  )
})

export default Dashboard;
