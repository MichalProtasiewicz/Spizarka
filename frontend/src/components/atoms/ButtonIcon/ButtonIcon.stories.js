import React from 'react';
import { storiesOf } from '@storybook/react';
import plusIcon from 'assets/icons/plus.svg';
import ButtonIcon from './ButtonIcon';

storiesOf('Atoms/ButtonIcon', module)
  .add('Plus', () => <ButtonIcon icon={plusIcon} active/>);

