import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';

const isNewItemBarVisible = true;

storiesOf('Organisms/Modal', module).add('Modal', () => <Modal isVisible={isNewItemBarVisible} />);
