import React from 'react';
import { storiesOf } from '@storybook/react';
import PlFlag from 'assets/icons/plFlag.svg';
import LanguageButton from './LanguageButton';

storiesOf('Atoms/LanguageButton', module).add('LanguageButton', () => (
  <LanguageButton icon={PlFlag} />
));
