import React from 'react';
import { storiesOf } from '@storybook/react';
import NewItemBar from './NewItemBar';

const isNewItemBarVisible = true;

storiesOf('Organisms/NewItemBar', module).add('NewItemBar', () => (
  <NewItemBar isVisible={isNewItemBarVisible} />
));
