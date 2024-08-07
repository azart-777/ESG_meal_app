import React, { useState, useRef } from 'react';
import { MenuItem, Box, IconButton, Avatar, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { uk_UA, en_US } from '../../assets/images/flags'
import './LanguageSwitch.scss';

interface Language {
    code: string;
    name: string;
    flag: string;
}

const languages: Language[] = [
    { code: 'en_Us', name: 'English', flag: en_US },
    { code: 'uk_Ua', name: 'Українська', flag: uk_UA },
];

export const LanguageSwitch: React.FC = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages.find(lang => lang.code === i18n.language) || languages[0]);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    };

    const handleMenuItemClick = (code: string) => {
        const language = languages.find(lang => lang.code === code);
        if (language) {
            setSelectedLanguage(language);
            i18n.changeLanguage(language.code); // Change language
            setOpen(false); // Close the dropdown
        }
    };

    return (
        <Box className={'language-switch__container'}>
            <IconButton className={'language-switch__flag-btn'} ref={anchorRef} onClick={handleToggle}>
                <Avatar src={selectedLanguage.flag} className={'language-switch__flag'} />
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow">
                                    {languages.map(language => (
                                        <MenuItem
                                            key={language.code}
                                            onClick={() => handleMenuItemClick(language.code)}
                                            className={'language-switch__menu-item'}
                                        >
                                            <Avatar src={language.flag} className={'language-switch__flag'} />
                                            <span className={'language-switch__language-text'}>{language.name}</span>
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    );
};