import React from 'react';
import { storiesOf } from '@storybook/react';
import CardsList from './CardsList';

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
];

storiesOf('Organisms/CardsList', module).add('ProductsList', () => <CardsList items={Cards} />);
