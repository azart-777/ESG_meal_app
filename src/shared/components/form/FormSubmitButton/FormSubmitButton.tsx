import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { useForm } from 'react-final-form';
import './FormSubmitButton.scss';

interface SubmitButtonProps extends ButtonProps {
    label: string;
}

const FormSubmitButton: React.FC<SubmitButtonProps> = ({ label, ...props }) => {
    const form = useForm();

    return (
        <Button
            {...props}
            onClick={(event) => {
                event.preventDefault();
                form.submit();
            }}
        >
            {label}
        </Button>
    );
};
export default FormSubmitButton;