import React from 'react';
import { MenuItem } from '@mui/material';
import './LanguageMenuItem.scss';

interface Language {
    code: string;
    name: string;
    abbreviation: string;  // Додаємо поле для скорочення
}

interface LanguageItemProps {
    language: Language;
    onClick: () => void;
}

export const LanguageMenuItem: React.FC<LanguageItemProps> = ({ language, onClick }) => {
    return (
        <MenuItem onClick={onClick} className="language-switch__menu-item">
            {/* Виводимо скорочення мови замість аватара */}
            <span className="language-switch__abbreviation">{language.abbreviation}</span>
            {/* <span className="language-switch__language-text">{language.name}</span> */}
        </MenuItem>
    );
};
