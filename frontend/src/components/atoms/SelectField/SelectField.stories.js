import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from 'react-select';

const categories = [
  {
    id: 1,
    name: 'Pieczywo',
  },
  {
    id: 2,
    name: 'Nabiał',
  },
  {
    id: 3,
    name: 'Owoce',
  },
];

storiesOf('Atoms/SelectField', module).add('Normal', () => (
  <Select
    options={categories}
    name="categories"
    getOptionValue={(option) => option.id}
    getOptionLabel={(option) => option.name}
    placeholder="Category"
  />
));
