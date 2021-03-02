import React, {useState} from 'react';
import css from './ButtonsGroup.module.scss';

interface IProps {
  labels: Array<String>;
  selected?: number;
  blue?: boolean
  onChange: (selected: number) => void;
}

const ButtonsGroup = ({labels, selected: selectedDefault, onChange, blue}: IProps) => {

  const [selected, setSelected] = useState(selectedDefault || 0);

  return (
    <div className={`${css.group} ${blue ? css.blue1 : ''} `}>
      {labels.map((label, i) =>
        <button className={i === selected ? css.active : ''} key={i}
                onClick={() => {
                  setSelected(i);
                  onChange(i);
                }}>
          <span>{label}</span>
        </button>
      )}
    </div>
  )
}

export default ButtonsGroup;
