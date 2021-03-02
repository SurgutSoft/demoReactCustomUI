import React, {useEffect, useState} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import {Route, Switch, useHistory, withRouter} from "react-router";
import Dashboard from "../../../screens/Dashboard/Dashboard";
import DesktopNav from "../DesktopNav/DesktopNav";
import ui from '../../../store/UIStore';
import animalStore from '../../../store/AnimalStore';
import bowlStore from '../../../store/BowlStore';
import {observer} from "mobx-react-lite";
import {Dialog, Drawer, useMediaQuery, useTheme} from '@material-ui/core';
import AnimalViewScreen from "../../../screens/AnimalViewScreen/AnimalViewScreen";
import {Path} from "../../../consts/router";
import AnimalEditScreen from "../../../screens/AnimalEditScreen/AnimalEditScreen";
import AboutScreen from "../../../screens/AboutScreen/AboutScreen";
import SettingsScreen from "../../../screens/SettingsScreen/SettingsScreen";
import NotificationsScreen from "../../../screens/NotificationsScreen/NotificationsScreen";
import BowlColorsScreen from "../../../screens/BowlColorsScreen/BowlColorsScreen";
import DogParkScreen from "../../../screens/DogParkScreen/DogParkScreen";
import BowlDetailsScreen from "../../../screens/BowlDetailsScreen/BowlDetailsScreen";
import styles from './AppLayout.module.scss'
import UserScreen from "../../../screens/UserScreen/UserScreen";
import userStore from "../../../store/UserStore";
import Alert from "../../common/Dialogs/Alert";
import ReportScreen from "../../../screens/ReportScreen/ReportScreen";
import MealPlanScreen from "../../../screens/MealPlanScreen/MealPlanScreen";
import {AppEvent} from "../../../consts/common";


const AppLayout = observer(() => {

  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();
  const {
    animals,
    setAnimalId,
  } = animalStore;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    userStore.fetchData();
    // eslint-disable-next-line
  }, []);


  return (
    <div className={styles.AppLayout}>

      <Drawer anchor="left" open={menuOpen} elevation={5} onClose={() => setMenuOpen(false)}>
        <Sidebar onClose={() => setMenuOpen(false)}/>
      </Drawer>

      <DesktopNav data-animalId={animalStore.animalId}
                  animals={animals} onMenuClick={() => setMenuOpen(true)}
                  onAddClick={() => history.push(Path.animalNew)}
                  onChange={setAnimalId}/>

      <Dashboard isMobile={isMobile} onMenuClick={() => setMenuOpen(true)}/>

      <Dialog
        fullScreen={isMobile}
        open={history.location.pathname !== Path.home}
        onClose={() => history.push(Path.home)}
        aria-labelledby="responsive-dialog-title">

        <div className={styles.screen}>
          <Switch>
            <Route exact path={Path.animal}>
              <AnimalViewScreen/>
            </Route>
            <Route exact path={Path.animalNew}>
              <AnimalEditScreen/>
            </Route>
            <Route exact path={Path.animalEdit}>
              <AnimalEditScreen/>
            </Route>
            <Route exact path={Path.notifications}>
              <NotificationsScreen/>
            </Route>
            <Route exact path={Path.dogPark}>
              <DogParkScreen/>
            </Route>
            <Route exact path={Path.bowlColors}>
              <BowlColorsScreen/>
            </Route>
            <Route exact path={Path.account}>
              <UserScreen/>
            </Route>
            <Route exact path={Path.settings}>
              <SettingsScreen/>
            </Route>
            <Route exact path={Path.about}>
              <AboutScreen/>
            </Route>
            <Route exact path={Path.bowlDetails}>
              <BowlDetailsScreen/>
            </Route>
            <Route exact path={Path.report}>
              <ReportScreen/>
            </Route>
            <Route exact path={Path.mealPlan}>
              <MealPlanScreen/>
            </Route>
          </Switch>
        </div>
      </Dialog>

      <Alert open={!!ui.alertMessage} type={ui.alertType} onClose={ui.hideAlert}>
        {ui.alertMessage || ''}
      </Alert>
    </div>
  )
});

window.addEventListener(AppEvent.animalChanged, () => {
  bowlStore.fetchData(animalStore.animalId);
});

export default withRouter(AppLayout);
