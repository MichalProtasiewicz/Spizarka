import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { authCheckState as authCheckStateAction } from 'actions';

const MainTemplate = ({ children, auth, tryAutoLogin }) => {
    useEffect(() => {
      tryAutoLogin();
    }, []);
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      {auth.token === null ? <Redirect to={routes.login} /> : <Redirect to={routes.home} />}
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  auth: PropTypes.object.isRequired,
  tryAutoLogin: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = (dispatch) => ({
  tryAutoLogin: () => dispatch(authCheckStateAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate);
