import React from 'react';

const DrawerToggleButton = props => (
  <button className="btn" onClick={props.drawerClickHandler}><i className="fa fa-bars"></i></button>
);

export default DrawerToggleButton
