import React from 'react';
import { storiesOf } from '@storybook/react';
import ShopCardsList from './ShopCardsList';

const Cards = [
  {
    id: '1',
    name: 'Masło',
    category: 'Nabiał',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: '2',
    name: 'Chleb',
    category: 'Pieczywo',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: '3',
    name: 'Mleko',
    category: 'Nabiał',
    quantity: 2,
    minQuantity: 2,
  },
  {
    id: '4',
    name: 'Wędlina',
    category: 'Mięso',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: '5',
    name: 'Ser',
    category: 'Nabiał',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: '6',
    name: 'Pasta',
    category: 'Higiena',
    quantity: 2,
    minQuantity: 2,
  },
  {
    id: '7',
    name: 'Masło',
    category: 'Nabiał',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: '8',
    name: 'Chleb',
    category: 'Pieczywo',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: '9',
    name: 'Mleko',
    category: 'Nabiał',
    quantity: 2,
    minQuantity: 2,
  },
  {
    id: '10',
    name: 'Wędlina',
    category: 'Mięso',
    quantity: 3,
    minQuantity: 1,
  },
  {
    id: '11',
    name: 'Ser',
    category: 'Nabiał',
    quantity: 1,
    minQuantity: 2,
  },
  {
    id: '12',
    name: 'Pasta',
    category: 'Higiena',
    quantity: 2,
    minQuantity: 2,
  },
];

storiesOf('Organisms/ShopCardsList', module).add('ShopCardsList', () => (
  <ShopCardsList items={Cards} />
));
