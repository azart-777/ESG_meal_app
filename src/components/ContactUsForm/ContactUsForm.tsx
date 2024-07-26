import React from 'react';
import { Field, Form } from 'react-final-form';
import { FieldRenderProps } from 'react-final-form';
import { ContactUsSummary } from './ContactUsSummary/ContactUsSummary';
import { onSubmit, required, validateEmail } from './ContactUsFormHelpers';
import './ContactUsForm.scss';
import FormTextField from "../../shared/components/form/FormTextField/FormTextField";
import FormSubmitButton from "../../shared/components/form/FormSubmitButton/FormSubmitButton";
import {Container} from "@mui/material";

export const ContactUsForm:  React.FC = () => {

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, pristine}) => {
                const formState  = form.getState();
                const touched = formState?.touched || {};
                const errors = formState?.errors || {};
                const hasError = touched.userSummary && errors.userSummary;

                return (
                    <Container  maxWidth='md'>
                    <form className={'contact-us__form'} onSubmit={handleSubmit}>
                        <div className={'contact-us__form-header-container'}>
                            <span>Contact <span>Us</span></span>
                        </div>
                        <div className={'contact_us__form-summary-container'}>
                            <Field
                                name="userSummary"
                                component={ ContactUsSummary }
                                validate={ required }
                                hasError={hasError}
                            />
                        </div>
                        <div className={'contact-us__form-user-container'}>
                            <div className={'contact-us__form-user-item'}>
                                <Field<string> name="userName" validate={required}>
                                    {(props: FieldRenderProps<string, HTMLElement>)  => <FormTextField {...props} label="*Your Name"/>}
                                </Field>
                            </div>
                            <div className={'contact-us__form-user-item'}>
                                <Field<string> name="userEmail" validate={validateEmail}>
                                    {(props: FieldRenderProps<string, HTMLElement>) => <FormTextField {...props} label="*Your Email"/>}
                                </Field>
                            </div>
                        </div>
                        <div>
                            <Field<string> name="userMessage" validate={required}>
                                {(props: FieldRenderProps<string, HTMLElement>) => <FormTextField {...props} label="*Just leave your message..." multiline rows={4}/>}
                            </Field>
                        </div>
                        <div className={'contact-us__form-actions-container'}>
                            <div className={'contact-us__form-actions-info'}>
                                <div><span>Shift&#8679;</span> + <span>Enter&#8629;</span> New Line</div>
                            </div>
                            <div className={'contact-us__form-actions-submit'}>
                                <div>push <span>Enter&#8629;</span></div>
                                <FormSubmitButton type="submit" label="Submit" variant="contained" color="primary" />
                            </div>
                        </div>
                    </form>
                    </Container>
            )}}
        />
    );
};
