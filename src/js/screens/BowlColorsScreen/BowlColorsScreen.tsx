import React from 'react';
import IconButton from "../../components/common/Icons/IconButton";
import {BackIcon} from "../../components/common/Icons/Icons";
import {Link} from 'react-router-dom';
import {Path} from "../../consts/router";

import styles from './BowlColorsScreen.module.scss';

const BowlColorsScreen = () => {

  return (
    <div className="screen">
      <header>
        <Link to={Path.home}><IconButton><BackIcon/></IconButton></Link>
        <h3>Bowl Lights Meaning</h3>
        <div></div>
      </header>
      <main className={styles.content}>
        <p>Not ready yet</p>
      </main>
    </div>
  );

}

export default BowlColorsScreen;
