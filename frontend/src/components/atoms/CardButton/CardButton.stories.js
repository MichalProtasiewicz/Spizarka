import React from 'react';
import { storiesOf } from '@storybook/react';
import CardButton from './CardButton';
import EditIcon from 'assets/icons/edit.svg';

storiesOf('Atoms/CardButton', module).add('Initial', () => <CardButton icon={EditIcon} />);
