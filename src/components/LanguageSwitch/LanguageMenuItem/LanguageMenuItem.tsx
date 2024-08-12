import React from 'react';
import { MenuItem, Avatar } from '@mui/material';
import './LanguageMenuItem.scss'

interface Language {
    code: string;
    name: string;
    flag: string;
}

interface LanguageItemProps {
    language: Language;
    onClick: () => void;
}

export const LanguageMenuItem: React.FC<LanguageItemProps> = ({ language, onClick }) => {
    return (
        <MenuItem onClick={onClick} className="language-switch__menu-item">
            <Avatar src={language.flag} className="language-switch__flag" />
            <span className="language-switch__language-text">{language.name}</span>
        </MenuItem>
    );
};