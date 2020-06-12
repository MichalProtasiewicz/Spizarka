import React from 'react';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import ErrorLabel from 'components/atoms/ErrorLabel/ErrorLabel';

const InputField = () => (
  <>
    <Input/>
    <Label>Name</Label>
    <ErrorLabel/>
  </>
)

export default InputField;
