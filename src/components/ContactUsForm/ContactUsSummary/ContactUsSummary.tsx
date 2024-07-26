import React from 'react';
import { FieldRenderProps } from "react-final-form";
import './ContactUsSummary.scss'

interface ContactUsSummaryProps extends FieldRenderProps<string, HTMLElement> {
    hasError?: boolean;
}

export const ContactUsSummary: React.FC<ContactUsSummaryProps> = ({ input, meta, hasError  }) => {
    const summaryOptions: string[] = [
        'I would like to become a ESG MEAL family Partner',
        'I have some proposition/suggestion',
        'I have some feedback',
        'I\'d like to work with you',
        'I\'d like to chat'
    ];

    return (
        <div className={`form-summary ${hasError ? 'error' : ''}`}>
            <div className={'form-summary__question-text'}>
                What`s your message about?
            </div>
            <div className={'form-summary__option-container'}>
            {summaryOptions.map((container, index) => (
                <div
                    key={index}
                    className={`form-summary__option-item ${input.value === container ? 'selected' : ''}`}
                    onClick={() => input.onChange(container)}
                >
                    {container}
                </div>
            ))}
            </div>
        </div>
    );
};