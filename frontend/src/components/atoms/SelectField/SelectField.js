import React from 'react';
import PropTypes from 'prop-types';
import { FieldProps } from 'formik';
import Select, { Option, ReactSelectProps } from 'react-select';

export const SelectField: React.SFC<ReactSelectProps & FieldProps> = ({ options, field, form }) => (
         <Select
           options={options}
           name={field.name}
           getOptionValue={(option) => option.id}
           getOptionLabel={(option) => option.name}
           onChange={(option: Option) => form.setFieldValue(field.name, option.id)}
           onBlur={field.onBlur}
         />
       );

SelectField.propTypes = {
  options: PropTypes.array.isRequired,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

SelectField.defaultProps = {

};
