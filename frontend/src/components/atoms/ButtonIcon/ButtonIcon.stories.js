import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonIcon from './ButtonIcon';
import PlusIcon from '@material-ui/icons/Add';

storiesOf('Atoms/ButtonIcon', module).add('Initial', () => (
  <ButtonIcon>
    <PlusIcon style={{ fontSize: 40, color: 'hsl(156, 100%, 99%)' }} />
  </ButtonIcon>
));

