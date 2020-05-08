import React from 'react';
import Navbar from 'components/organisms/Navbar/Navbar';
import CardsList from 'components/organisms/CardsList/CardsList';

const Cards = [
  {
    id: 1,
    name: 'Masło',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: 2,
    name: 'Chleb',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: 3,
    name: 'Mleko',
    quantity: 2,
    minQuantity: 2,
  },
  {
    id: 4,
    name: 'Wędlina',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: 5,
    name: 'Ser',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: 6,
    name: 'Pasta',
    quantity: 2,
    minQuantity: 2,
  },
  {
    id: 7,
    name: 'Masło',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: 8,
    name: 'Chleb',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: 9,
    name: 'Mleko',
    quantity: 2,
    minQuantity: 2,
  },
  {
    id: 10,
    name: 'Wędlina',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: 11,
    name: 'Ser',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: 12,
    name: 'Pasta',
    quantity: 2,
    minQuantity: 2,
  },
];

const MainPage = () => (
  <>
    <Navbar />
    <CardsList items={Cards}/>
  </>
);
export default MainPage;
