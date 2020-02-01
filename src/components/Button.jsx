import React from 'react';
import './Button.scss';

const Button = ({ onClick, label }) => {
  return (
    <button className="button-container" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
