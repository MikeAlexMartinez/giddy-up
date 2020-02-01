import React, { useContext } from 'react';
import { Link } from '@reach/router';
import './Header.scss';

import { Context as StatusContext } from '../context/StatusContext';

import Button from './Button';

const Navigation = ({ title }) => {
  const { state, toggleEverything, toggleAwesome } = useContext(StatusContext);

  const everythingButtonLabel = state.everything ? 'Everthing' : 'Nothing';
  const awesomeButtonLabel = state.awesome ? 'is Awesome' : 'is Rubbish';

  return (
    <div>
      <h1>{title}</h1>
      <div className="status-controls">
        <Button label={everythingButtonLabel} onClick={() => toggleEverything()} />
        <Button label={awesomeButtonLabel} onClick={() => toggleAwesome()} />
      </div>
      <nav className="nav-container">
        <Link to="/">Home</Link>
        <div> | {" "}</div>
        <Link to="/checkout/returning">Checkout Existing</Link>
        <div> | {" "}</div>
        <Link to="/checkout/new">Checkout New</Link>
      </nav>
    </div>
  );
};

export default Navigation;
