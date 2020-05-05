import React from 'react';
import List from 'components/organisms/toRework';
import Button from 'components/atoms/Button/Button';
import Logo from 'components/atoms/Logo/Logo';
import Card from 'components/molecules/Card/Card';

const MainPage = () => (
  <>
    <Logo/>
    <List />
    <Button>Hello</Button>
    <Card/>
  </>
);
export default MainPage;
