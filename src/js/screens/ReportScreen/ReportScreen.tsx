import React, {useEffect, useState} from 'react';
import IconButton from "../../components/common/Icons/IconButton";
import {BackIcon, OkGreenIcon} from "../../components/common/Icons/Icons";
import {Link, useParams} from 'react-router-dom';
import {Path} from "../../consts/router";
import styles from './ReportScreen.module.scss';
import {observer} from "mobx-react-lite";
import {BowlType, getPortionDiff, PortionDiff} from "../../consts/common";
import animalStore from '../../store/AnimalStore';
import {foodUsageStore, waterUsageStore} from "../../store/UsageStore";
import settings from "../../store/SettingsStore";
import ButtonsGroup from "../../components/common/ButtonsGroup/ButtonsGroup";
import Loader from "../../components/common/Loader/Loader";
import {FoodChart, WaterChart} from "../../components/usage/Chart/Chart";
import Weight from "../../components/bowl/Weight/Weight";
import {IUsageItem} from "../../models/Usage";

interface Params {
  type: string
}

const ReportScreen = observer(() => {
    const mealPlan = animalStore.mealPlan;
    const params = useParams<Params>();
    const type = params.type as BowlType;
    const dataUnit = settings.unit;

    const usageStore = type === BowlType.food ? foodUsageStore : waterUsageStore;
    const [selectedInterval, setSelectedInterval] = useState(1);
    let data = usageStore.weekData;
    if (selectedInterval === 0) data = usageStore.dayData;
    if (selectedInterval === 1) data = usageStore.weekData;
    if (selectedInterval === 2) data = usageStore.monthData;
    if (selectedInterval === 3) data = usageStore.allDataByMonth;

    if (!data)
      useEffect(() => {
        usageStore.fetchData();
        // eslint-disable-next-line
      }, []);

    return (
      <div className={`${styles.wrapper} screen `}>
        <header className={styles.header}>
          <Link to={Path.home}><IconButton><BackIcon/></IconButton></Link>
          <h3>Meal Report</h3>
          <div>
          </div>
        </header>

        <main>

          <div className={styles.controls}>
            <ButtonsGroup labels={['Day', 'Week', 'Month', 'Year']}
                          selected={selectedInterval}
                          onChange={setSelectedInterval}
                          blue={type === BowlType.water}/>
          </div>

          <div className={styles.content}>

            {type === BowlType.water ?
              <WaterSummary data={data} dayInterval={selectedInterval === 0}/> :
              <FoodSummary data={data} dayInterval={selectedInterval === 0}/>
            }

            <div className={styles.chart}>
              {usageStore.isLoading ?
                <Loader color={type === BowlType.food ? 'primary' : 'blue'}/> :
                type === BowlType.food ?
                  <FoodChart data={data} dataUnit={dataUnit} mealPlan={mealPlan}/> :
                  <WaterChart data={data} dataUnit={dataUnit}/>
              }
            </div>
          </div>

        </main>
      </div>
    );
  }
)


interface SummaryProps {
  data: Array<IUsageItem>,
  dayInterval: boolean
}

const WaterSummary = ({data}: SummaryProps) => {
  const avg = waterUsageStore.avg(data);
  return <div className={styles.summary}>
    {avg > 0 &&
    <div className={styles.center}>
      <div>
        <Weight value={avg} unit={settings.unit} type={BowlType.water} size="large" color="blue"/>
        <label>average</label>
      </div>
    </div>}
  </div>
}

const FoodSummary = ({data, dayInterval}: SummaryProps) => {
  const usageStore = foodUsageStore;
  const dayPortion = animalStore.dayPortion;
  const avg = dayInterval ? usageStore.sum(data) : usageStore.avg(data);
  const diff = Math.abs(avg - dayPortion);
  const diffLabel = getPortionDiff(avg, dayPortion)

  return <div className={styles.summary}>
    <div>
      <div>
        <Weight value={avg} unit={settings.unit} size="large"/>
        <label>{dayInterval? 'today': 'day average'}</label>
      </div>
      <div className={styles.divider}/>
      <div>
        <Weight value={dayPortion} unit={settings.unit} size="large"
                color="gray"/>
        <label>meal plan</label>
      </div>
    </div>

    {avg > 0 &&
    <div className={styles[diffLabel]}>
      {diffLabel === PortionDiff.normal ?
        <>
          <OkGreenIcon/><br/>
          <label>just right</label>
        </> :
        <>
          <Weight value={diff} unit={settings.unit} size="large"
                  color={diffLabel === PortionDiff.overfed ? 'red' : 'gray'}/>
          <label>{diffLabel}</label>
        </>}
    </div>}

  </div>
}
export default ReportScreen;
