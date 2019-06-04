import React from 'react';
import './style.css';

const ContainerDiv = props => {
  return <div className="container backgroundColor">{props.children}</div>;
};

export default ContainerDiv;
