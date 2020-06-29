import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/icons/magnifier.svg';

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 15px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: 0px;
  border-radius: 10px;
  outline: none;
  &:focus {
    box-shadow: 0 0 0px 4px ${({ theme }) => theme.blue};
  }
  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;

const InputLabel = styled.label`
  pointer-events: none;
  background-color: ${({ theme }) => theme.grey100};
  color: ${({ theme }) => theme.grey300};
  border-radius: 8px;
  padding: 0 5px 0 5px;
  position: absolute;
  top: 15px;
  left: 10px;
  transition: 0.2s ease all;

  ${StyledInput}:focus ~ & {
    background-color: ${({ theme }) => theme.white};
    top: -10px;
    left: 15px;
  }
  ${StyledInput}:valid~ & {
    background-color: ${({ theme }) => theme.white};
    top: -10px;
    left: 15px;
  }
`;

const ErrorLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.danger};
  position: absolute;
  top: 55px;
  left: 20px;
`;

const Input = ({ children, errorLabelName, ...props }) => {
  const [t] = useTranslation('translation');
  return (
    <StyledInputWrapper>
      <StyledInput {...props} required />
      {StyledInput.value === '' ? (
        <InputLabel>{children}</InputLabel>
      ) : (
        <InputLabel active>{children}</InputLabel>
      )}

      {errorLabelName ? (
        <ErrorLabel>
          <ErrorMessage name={errorLabelName}>{msg => t(msg)}</ErrorMessage>
        </ErrorLabel>
      ) : null}
    </StyledInputWrapper>
  );
};

Input.propTypes = {
  children: PropTypes.string,
  errorLabelName: PropTypes.string,
};

Input.defaultProps = {
  children: null,
  errorLabelName: null,
};

export default Input;
