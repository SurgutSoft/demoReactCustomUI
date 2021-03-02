import React from 'react';

import BowlImage, {IProps} from './BowlImage';
import '../../../../styles/index.scss';
import {FOLDER_APP} from "../../../consts/storyBook";
import {BowlType} from "../../../consts/common";
import {Meta, Story} from "@storybook/react";

export default {
  title: `${FOLDER_APP}/BowlImage`,
  component: BowlImage,
  argTypes: {
    type: {
      name: 'type',
      type: {name: 'string', required: false},
      control: {
        type: 'select',
        options: [
          BowlType.food,
          BowlType.water
        ],
      },
    },
    bowlLevel: {
      name: 'bowlLevel', required: true,
      control: {
        type: 'range',
      },
    },
  },
  args: {
    bowlLevel: 20,
    oldWater: false,
    offline: false
  },
} as Meta;

const Template: Story<IProps> = (args) => <BowlImage {...args} />;


export const WaterBowl = Template.bind({});
WaterBowl.args = {
  type: BowlType.water,
  bowlLevel: 40,
  zoom: 2
};

export const FoodBowl = Template.bind({});
FoodBowl.args = {
  type: BowlType.food,
  bowlLevel: 20,
  zoom: 2,
};

export const BowlsStates = () => (
  <div>
    <strong>Water states: <br/><br/></strong>

    <div className="flex">
      <BowlImage bowlLevel={0} type={BowlType.water} color="purple"/> &nbsp;
      <BowlImage bowlLevel={10} type={BowlType.water}/> &nbsp;
      <BowlImage bowlLevel={40} type={BowlType.water}/> &nbsp;
      <BowlImage bowlLevel={40} type={BowlType.water} oldWater={false}/> &nbsp;
      <BowlImage bowlLevel={70} type={BowlType.water} oldWater={true}/> &nbsp;
      <BowlImage bowlLevel={3} type={BowlType.water} oldWater={true}/> &nbsp;
      <BowlImage bowlLevel={9} type={BowlType.water} oldWater={false} batteryLevel={3}
                 blinkPattern={[500, 400, 500, 400, 500, 400, 500, 400, 500, 400, 500]}/> &nbsp;
    </div>

    <br/><br/><br/>

    <strong>Food states: <br/><br/></strong>

    <div className="flex">
      <BowlImage bowlLevel={0} type={BowlType.food}/> &nbsp;
      <BowlImage bowlLevel={30} type={BowlType.food}/> &nbsp;
      <BowlImage bowlLevel={60} type={BowlType.food}/> &nbsp;
      <BowlImage bowlLevel={30} type={BowlType.food} color="green"/> &nbsp;
      <BowlImage bowlLevel={85} type={BowlType.food} color="red"/> &nbsp;

      <BowlImage bowlLevel={10} type={BowlType.food} oldWater={false} color="orange"
                 blinkPattern={[500, 400, 500, 400, 500, 400, 500, 400, 500, 400, 500]}/> &nbsp;

    </div>

    <br/><br/><br/>

    <strong>Offline: <br/><br/></strong>

    <div className="flex">
      <BowlImage bowlLevel={90} type={BowlType.food} offline/>
    </div>


  </div>
);
