import React from 'react';
import { Router } from '@reach/router';

import './App.scss';

import { Provider as StatusProvider } from './context/StatusContext';

import Home from './pages/Home';
import ReturningCustomer from './pages/ReturningCustomer';
import NewCustomer from './pages/NewCustomer';

function App() {
  return (
    <StatusProvider>
      <Router>
        <Home path="/" />
        <ReturningCustomer path="checkout/returning" />
        <NewCustomer path="checkout/new" />
      </Router>
    </StatusProvider>
  );
}

export default App;
