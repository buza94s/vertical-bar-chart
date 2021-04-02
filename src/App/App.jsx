import React from 'react';
import Container from './App.styled';
import VerticalBarChart from '../VerticalBarChart';
import { arr1, arr2 } from '../data';
const App = () => {
  return (
    <Container>
      <VerticalBarChart bar={arr1} height={300} />
      <VerticalBarChart bar={arr2} height={200} />
    </Container>
  );
};

export default App;
