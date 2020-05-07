import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Navbar from './Navbar';

storiesOf('Organisms/Navbar', module)
  .addDecorator(StoryRouter())
  .add('Navbar', () => <Navbar />);
