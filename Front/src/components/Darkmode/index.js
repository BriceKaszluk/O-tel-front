import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Globalstyle';
import { lightTheme, darkTheme } from './Themes';
import { useDarkMode } from './useDarkMode';
import Toggle from './Toggler';

import './styles.scss';

const Darkmode = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (

    <ThemeProvider theme={themeMode}>
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <GlobalStyles />
      <button className="dark-mode-button" type="button" onClick={themeToggler}>Switch Theme</button>
    </ThemeProvider>

  );
};

export default Darkmode;
