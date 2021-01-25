import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Toggle from './Toggler';

import './styles.scss';

export default () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <div className="button__toggle">
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
      </div>
    </ThemeProvider>
  );
};
