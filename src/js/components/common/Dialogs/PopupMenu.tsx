import React, {useState} from 'react';

import {Menu, MenuItem} from "@material-ui/core";
import IconButton from "../Icons/IconButton";
import {MoreIcon} from "../Icons/Icons";

export interface IMenuItem {
  label: string,
  onClick: () => void;
}

interface IProps {
  items: Array<IMenuItem>;
  children?: any;
}

const PopupMenu = ({items, children}: IProps) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const onMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <IconButton onClick={onMenuClick}>
        {children || <MoreIcon/>}
      </IconButton>
      <Menu anchorEl={anchorEl} open={menuOpen} keepMounted onClose={() => setMenuOpen(false)}>
        {items.map(item => <MenuItem key={item.label} onClick={() => {
          setMenuOpen(false);
          item.onClick()
        }}>{item.label}</MenuItem>)}
      </Menu>
    </>
  )
}

export default PopupMenu;
