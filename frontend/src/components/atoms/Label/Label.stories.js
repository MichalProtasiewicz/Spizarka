import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from './Label';

storiesOf('Atoms/Label', module)
  .add('Normal', () => <Label>Name</Label>)

