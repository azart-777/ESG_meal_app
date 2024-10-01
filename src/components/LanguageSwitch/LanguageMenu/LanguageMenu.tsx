import React, { forwardRef } from 'react';
import { MenuList } from '@mui/material';
import { LanguageMenuItem } from '../LanguageMenuItem/LanguageMenuItem';
import { useLanguage } from '../../../shared/hooks/useLanguage';
import './LanguageMenu.scss';

interface LanguageMenuProps {
    closeMenu: () => void;
}

export const LanguageMenu = forwardRef<HTMLUListElement, LanguageMenuProps>(({ closeMenu }, ref) => {
    const { languages, changeLanguage } = useLanguage();

    const handleItemClick = (code: string) => {
        changeLanguage(code);
        closeMenu();
    };

    return (
        <MenuList autoFocusItem ref={ref}>
            {languages.map(language => (
                <LanguageMenuItem
                    key={language.code}
                    language={language}
                    onClick={() => handleItemClick(language.code)}
                />
            ))}
        </MenuList>
    );
});
