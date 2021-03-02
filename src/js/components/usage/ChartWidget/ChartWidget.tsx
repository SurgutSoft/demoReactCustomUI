import {observer} from "mobx-react-lite";
import ButtonsGroup from "../../common/ButtonsGroup/ButtonsGroup";
import {BowlType} from "../../../consts/common";
import {FoodChart, WaterChart} from "../Chart/Chart";
import {foodUsageStore, waterUsageStore} from "../../../store/UsageStore";
import settings from "../../../store/SettingsStore";
import animalStore from "../../../store/AnimalStore";
import React, {useEffect, useState} from "react";

import styles from './ChartWidget.module.scss';
import Button from "../../common/Button/Button";
import Loader from "../../common/Loader/Loader";
import {Link} from "react-router-dom";


interface IProps {
  type: BowlType;
}

const ChartWidget = observer(({type}: IProps) => {

  const [selectedInterval, setSelectedInterval] = useState(1);
  const usageStore = type === BowlType.food ? foodUsageStore : waterUsageStore;
  const dataUnit = settings.unit;
  const mealPlan = animalStore.mealPlan;

  let data = usageStore.weekData;
  if (selectedInterval === 0) data = usageStore.dayData;
  if (selectedInterval === 2) data = usageStore.monthData;

  useEffect(() => {
    usageStore.fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="widget">
        <div className={styles.controls}>
          <ButtonsGroup labels={['Day', 'Week', 'Month']}
            selected={selectedInterval}
            onChange={setSelectedInterval}
            blue={type === BowlType.water} />
          <Link to={`/report/${type}`}>
            <Button type="details" blue={type === BowlType.water}>Details</Button>
          </Link>
        </div>


        <div className={styles.chart}>
          {usageStore.isLoading ?
            <Loader color={type === BowlType.food ? 'primary' : 'blue'} /> :
            type === BowlType.food ?
              <FoodChart data={data} dataUnit={dataUnit} mealPlan={mealPlan} /> :
              <WaterChart data={data} dataUnit={dataUnit} />
          }
        </div>

      </div>
    </div>
  )
}
);

export default ChartWidget;
