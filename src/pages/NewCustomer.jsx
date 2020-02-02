import React from 'react';

import Layout from './Layout';
import Header from '../components/Header';
import Checkout from '../components/Checkout';
import ContentContainer from '../components/ContentContainer';

const NewCustomer = () => {
  return (
    <Layout>
      <Header title="Checkout - New"/>
      <ContentContainer>
        <Checkout>
          New Customer
        </Checkout>
      </ContentContainer>
    </Layout>
  );
};

export default NewCustomer;