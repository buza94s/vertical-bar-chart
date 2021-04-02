import React from 'react';
import { Bar, ItemBar } from './VerticalBarChart.styled';

const VerticalBarChart = ({ bar, height }) => {
  //bar - массив с высотой столбцовж
  //height - высота самого блока диаграммы
  const max = Math.max(...bar); //получаем столбец с макс высотой
  const heightSeparation = height / max; //получаем размер одного деления

  const barItems = bar.map((item) => {
    return <ItemBar height={item * heightSeparation} />;
  });
  return <Bar height={height}>{barItems}</Bar>;
};
export default VerticalBarChart;
