import React from 'react';
import '../../../../styles/index.scss';
import AnimalSelect from './AnimalSelect';
import {FOLDER_APP} from "../../../consts/storyBook";
import {IAnimalBase} from "../../../models/Animal";

export default {
  title: `${FOLDER_APP}/AnimalSelect`
};

const animals1 = [{
  id: 1, name: "Coby", current: true, image: 'https://s3.amazonaws.com/obedog-backend/animals/animal-images/angus_180_1287_rshm9.jpg'
}] as Array<IAnimalBase>;


const animals2 = [{
  id: 1, name: "Coby", current: true, image: 'https://s3.amazonaws.com/obedog-backend/animals/animal-images/angus_180_1287_rshm9.jpg'
},{
  id: 2, name: "Prince", current: false, image: 'https://s3.amazonaws.com/obedog-backend/animals/animal-images/prince_588_311_fawxb.jpg'
}] as Array<IAnimalBase>;

export const AnimalSelect_ = () => (
  <div>
    <p className="widget primaryBg">
      <AnimalSelect animals={animals1} darkBg={true} onChange={() => {
      }}/><br/>
      <AnimalSelect animals={animals2} darkBg={true} onChange={() => {
      }}/>
    </p>

    <p className="widget" style={{width: 60}}>
      <AnimalSelect animals={animals1} darkBg={false} onChange={() => {
      }}/>
    </p>

  </div>
);

