import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import store from 'store';
import { Provider } from 'react-redux';

addDecorator((story) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </Provider>
));
