import React, { useContext } from 'react';
import './Header.scss';

import { Context as StatusContext } from '../context/StatusContext';

import Button from './Button';
import TabLink from './TabLink';

const Navigation = ({ title }) => {
  const { state, toggleEverything, toggleAwesome } = useContext(StatusContext);

  const everythingButtonLabel = state.everything ? 'Everything' : 'Nothing';
  const awesomeButtonLabel = state.awesome ? 'is Awesome' : 'is Rubbish';

  return (
    <div>
      <h1>{title}</h1>
      <div className="status-controls">
        <Button label={everythingButtonLabel} onClick={() => toggleEverything()} />
        <Button label={awesomeButtonLabel} onClick={() => toggleAwesome()} />
      </div>
      <nav className="nav-container">
        <TabLink to="/">Home</TabLink>
        <TabLink to="/checkout/returning">Checkout Existing</TabLink>
        <TabLink to="/checkout/new">Checkout New</TabLink>
      </nav>
    </div>
  );
};

export default Navigation;
