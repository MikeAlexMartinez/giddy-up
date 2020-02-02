import React from 'react';

import Layout from './Layout';
import Header from '../components/Header'
import ContentContainer from '../components/ContentContainer';

const Home = () => {
  return (
    <Layout>
      <Header title="Awesome-Films.yeah" />
      <ContentContainer>
        Home
      </ContentContainer>
    </Layout>
  );
};

export default Home;