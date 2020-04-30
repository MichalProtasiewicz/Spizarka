import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import List from 'components/organisms/toRework';
import Button from 'components/atoms/Button/Button';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <List />
        <Button>Hello</Button>
      </>
    </ThemeProvider>
  </div>
);
export default Root;
