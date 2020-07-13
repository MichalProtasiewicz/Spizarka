import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/Card', module).add('Card', () => (
  <Card id={1} name="chleb" categoryId={1} categories={"piecz"} quantity={0} minQuantity={1} />
));
