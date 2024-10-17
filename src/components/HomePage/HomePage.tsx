import React from 'react';
import { Dashboard } from '../Dashboard';
import { Filter } from '../Filter';

const Home: React.FC = () => {
  return (
    <>
      <Filter />
      <Dashboard />
    </>
  );
};

export default Home;
