import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/Card', module)
  .add('Card', () => <Card id={1} name="pieczywo" categoryId={1}  />)

