import React from 'react';
import cn from 'classnames';

import styles from './Loader.module.scss';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  color?: 'white' | 'primary' | 'blue';
  size?: 'large' | 'medium' | 'small';
}

const Loader = ({color = 'primary', size = 'medium', className}: LoaderProps) => {
  return (
    <div className={cn(styles.loader, className, {
      [styles[`loader_${color}`]]: !!color,
      [styles[`loader_size_${size}`]]: !!size,
    })}
    >
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  );
};

export default Loader;
