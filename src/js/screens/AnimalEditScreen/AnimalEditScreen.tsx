import React from 'react';
import styles from './AnimalEditScreen.module.scss';
import IconButton from "../../components/common/Icons/IconButton";
import {BackIcon} from "../../components/common/Icons/Icons";
import {Link} from 'react-router-dom';
import {Path} from "../../consts/router";
import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
import animalStore from "../../store/AnimalStore";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router";

const AnimalEditScreen = observer(() => {

    const history = useHistory();
    const isNew = history.location.pathname === Path.animalNew;
    const animal = isNew ? null : animalStore.current;

    return (
      <div className="screen">
        <header className={styles.header}>
          <Link to={Path.animal}><IconButton><BackIcon/></IconButton></Link>
          <h3>{isNew ? <>Create profile</> : <>Edit profile</>}</h3>
          <Button type="text" disabled>
            Confirm
          </Button>
        </header>
        <main>
          <div className={styles.content}>
            <Input label="Name" value={animal ? animal.name : ''}/><br/><br/>
            <Input label="Weight" endAdornment="lbs" value={animal ? animal.weight + '' : ''}/>
          </div>
        </main>
      </div>
    )
  }
)

export default AnimalEditScreen;
