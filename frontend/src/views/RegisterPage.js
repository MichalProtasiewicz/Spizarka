import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { authSignup as authSignupAction } from 'actions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import {SmallInput} from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import NotificationWrapper from 'components/atoms/NotificationWrapper/NotificationWrapper';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled(SmallInput)`
  margin: 0 0 40px 0;
  width: 350px;
  @media (max-width: 450px) {
    width: 250px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin: 20px 0 20px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.raisinBlack};
  text-transform: uppercase;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 20px;
`;

const StyledInputWrapper = styled.div`
  position: relative;
`;

const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(8, 'errors.short').max(50, 'errors.long').required('errors.required'),
  email: Yup.string().email('errors.email').required('errors.required'),
  password1: Yup.string().min(8, 'errors.short').max(50, 'errors.long').required('errors.required'),
  password2: Yup.string()
    .required('errors.required')
    .oneOf([Yup.ref('password1'), null], 'errors.password'),
});

const RegisterPage = ({ authSignup, auth, register }) => {
  const [t] = useTranslation('translation');
  auth.error = null;
  return (
    <>
      {register.succesfull ? <NotificationWrapper>{t('errors.registerSuccess')}</NotificationWrapper> : null}
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
                <StyledHeading>{t('auth.titleRegister')}</StyledHeading>

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
                      {t('auth.username')}
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
                      {t('auth.email')}
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
                      {t('auth.password')}
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
                      {t('auth.password2')}
                    </StyledInput>
                  </StyledInputWrapper>
                  <Button type="submit">{t('auth.buttonRegister')}</Button>
                </StyledForm>
                <StyledLink to={routes.login}>{t('auth.loginLink')}</StyledLink>
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
