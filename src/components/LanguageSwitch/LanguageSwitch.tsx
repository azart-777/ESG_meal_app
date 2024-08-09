import React, { useState, useRef } from 'react';
import { Box, IconButton, Avatar, Popper, Grow, Paper, ClickAwayListener } from '@mui/material';
import { LanguageMenu } from './LanguageMenu/LanguageMenu';
import { useLanguage } from '../../shared/hooks/useLanguage';
import './LanguageSwitch.scss';

export const LanguageSwitch: React.FC = () => {
    const { selectedLanguage } = useLanguage();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => setOpen(prevOpen => !prevOpen);
    const handleClose = () => setOpen(false);

    return (
        <Box className={'language-switch__container'}>
            <IconButton className="language-switch__flag-btn" ref={anchorRef} onClick={handleToggle}>
                <Avatar src={selectedLanguage.flag} className="language-switch__flag" />
            </IconButton>
            <Popper
                className={'language-switch__popper'}
                transition
                disablePortal={true}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement={'bottom-end'}>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <LanguageMenu closeMenu={handleClose} />
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    );
};
