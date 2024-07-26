import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { TextField } from '@mui/material';
import './FormTextField.scss';

interface FormTextFieldProps extends FieldRenderProps<string, HTMLElement> {
    label: string;
    multiline?: boolean;
    rows?: number;
}

const FormTextField: React.FC<FormTextFieldProps> = ({ input, meta, label, multiline = false, rows = 1 }) => (
    <TextField
        {...input}
        label={label}
        className={'text-form-field'}
        variant="standard"
        margin="normal"
        fullWidth
        multiline={multiline}
        error={meta.touched && !!meta.error}
        helperText={meta.touched && meta.error ? meta.error : ''}
    />
);

export default FormTextField;