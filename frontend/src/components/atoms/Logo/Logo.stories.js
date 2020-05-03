import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Logo from './Logo';

storiesOf('Atoms/Logo', module)
  .addDecorator(StoryRouter())
  .add('Logo', () => <Logo />);
