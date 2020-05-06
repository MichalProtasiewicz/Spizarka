import React from 'react';
import List from 'components/organisms/toRework';
import Button from 'components/atoms/Button/Button';
import Logo from 'components/atoms/Logo/Logo';
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
];

const MainPage = () => (
  <>
    <Logo />
    <List />
    <Button>Hello</Button>
    <CardsList items={Cards}/>
  </>
);
export default MainPage;
