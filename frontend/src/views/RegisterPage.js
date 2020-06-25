import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { authSignup as authSignupAction } from 'actions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import NotificationWrapper from 'components/atoms/NotificationWrapper/NotificationWrapper';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 40px 0;
  width: 350px;
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

const StyledInputWrapper = styled.div`
  position: relative;
`;

const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password1: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required('Required'),
  password2: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password1'), null], 'Passwords must match'),
});

const RegisterPage = ({ authSignup, auth, register }) => {
  //wyczyszczenie errora po nieudanym logowaniu
  auth.error = null;
  return (
    <>
      {register.succesfull ? (
        <NotificationWrapper>Pomyślnie zarejestrowano nowe konto!</NotificationWrapper>
      ) : null}
      <AuthTemplate>
        <Formik
          initialValues={{ username: '', email: '', password1: '', password2: '' }}
          validationSchema={RegisterSchema}
          onSubmit={({ username, email, password1, password2 }) => {
            authSignup(username, email, password1, password2);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => {
            return (
              <>
                <StyledHeading big>Register</StyledHeading>

                <StyledForm onSubmit={handleSubmit}>
                  <StyledInputWrapper>
                    <StyledInput
                      type="text"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      errorLabelName="username"
                    >
                      Username
                    </StyledInput>
                  </StyledInputWrapper>
                  <StyledInputWrapper>
                    <StyledInput
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      errorLabelName="email"
                    >
                      Email
                    </StyledInput>
                  </StyledInputWrapper>
                  <StyledInputWrapper>
                    <StyledInput
                      type="password"
                      name="password1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      errorLabelName="password1"
                    >
                      Password
                    </StyledInput>
                  </StyledInputWrapper>
                  <StyledInputWrapper>
                    <StyledInput
                      type="password"
                      name="password2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      errorLabelName="password2"
                    >
                      Repeat password
                    </StyledInput>
                  </StyledInputWrapper>
                  <Button type="submit">register</Button>
                </StyledForm>
                <StyledLink to={routes.login}>I want to log in!</StyledLink>
              </>
            );
          }}
        </Formik>
      </AuthTemplate>
    </>
  );
};

RegisterPage.propTypes = {
  authSignup: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  register: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth, register }) => ({ auth, register });

const mapDispatchToProps = (dispatch) => ({
  authSignup: (username, email, password1, password2) =>
    dispatch(authSignupAction(username, email, password1, password2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
