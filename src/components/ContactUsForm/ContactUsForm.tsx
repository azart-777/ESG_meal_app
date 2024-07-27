import React from 'react';
import { Field, Form } from 'react-final-form';
import { FieldRenderProps } from 'react-final-form';
import { ContactUsSummary } from './ContactUsSummary/ContactUsSummary';
import { onSubmit, required, validateEmail } from './ContactUsFormHelpers';
import './ContactUsForm.scss';
import FormTextField from '../../shared/components/form/FormTextField/FormTextField';
import FormSubmitButton from '../../shared/components/form/FormSubmitButton/FormSubmitButton';
import { Container } from '@mui/material';
import { useTranslation } from "react-i18next";

export const ContactUsForm:  React.FC = () => {
    const { t } = useTranslation(["pages/home-page"]);

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
                            <span>{t("contactUs.contact")} <span>{t("contactUs.us")}</span></span>
                        </div>
                        <div className={'contact-us__form-summary-container'}>
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
                                    {(props: FieldRenderProps<string, HTMLElement>)  => <FormTextField {...props} label={t('contactUs.form.userName')}/>}
                                </Field>
                            </div>
                            <div className={'contact-us__form-user-item'}>
                                <Field<string> name="userEmail" validate={validateEmail}>
                                    {(props: FieldRenderProps<string, HTMLElement>) => <FormTextField {...props} label={t('contactUs.form.userEmail')}/>}
                                </Field>
                            </div>
                        </div>
                        <div className={'contact-us__form-user-message'}>
                            <Field<string> name="userMessage" validate={required}>
                                {(props: FieldRenderProps<string, HTMLElement>) => <FormTextField {...props} label={t('contactUs.form.userMessage')} multiline rows={4}/>}
                            </Field>
                        </div>
                        <div className={'contact-us__form-actions-container'}>
                            <div className={'contact-us__form-actions-info-container'}>
                                <div className={'contact-us__form-actions-info contact-us__form-text--highlight'}>
                                    {t('contactUs.form.buttons.shift')}
                                    <div className={'contact-us__form-actions-info-icon'}>
                                        &#8679;
                                    </div>
                                </div>
                                +
                                <div className={'contact-us__form-actions-info contact-us__form-text--highlight'}>
                                    {t('contactUs.form.buttons.enter')}
                                    <div className={'contact-us__form-actions-info-icon'}>
                                        &#8629;
                                    </div>
                                </div>
                                {t('contactUs.form.info.newLine')}
                            </div>
                            <div className={'contact-us__form-actions-submit'}>
                                <div className={'contact-us__form-actions-info-container'}>
                                    {t('contactUs.form.info.push')}
                                    <div className={'contact-us__form-actions-submit-text contact-us__form-actions-info contact-us__form-text--highlight'}>
                                        {t('contactUs.form.buttons.enter')}
                                        <div className={'contact-us__form-actions-info-icon'}>
                                            &#8629;
                                        </div>
                                    </div>
                                </div>
                                <FormSubmitButton type="submit" label={t('contactUs.form.buttons.submit')} variant="contained" color="primary"/>
                            </div>
                        </div>
                    </form>
                    </Container>
                )
            }}
        />
    );
};
