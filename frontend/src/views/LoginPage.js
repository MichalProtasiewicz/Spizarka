import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { authLogin as authLoginAction } from 'actions';
import { Formik, Form } from 'formik';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.raisinBlack};
  text-transform: uppercase;
  margin: 40px 0 40px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 30px;
`;

const LoginPage = ({ authLogin, auth }) => (
  <AuthTemplate>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authLogin(username, password);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => {
        return (
          <>
            <StyledHeading>Sign in</StyledHeading>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {auth.error != null ? <div>Błedny login lub hasło</div> : null}
              <Button type="submit">sign in</Button>
            </StyledForm>
            <StyledLink to={routes.register}>I want my account!</StyledLink>
          </>
        );
      }}
    </Formik>
  </AuthTemplate>
);

LoginPage.propTypes = {
  authLogin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = (dispatch) => ({
  authLogin: (username, password) => dispatch(authLoginAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
