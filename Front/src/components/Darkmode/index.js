import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Toggle from './components/Toggle';

function Darkmode2() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
      <div>
          <ThemeProvider theme={themeMode}>
              <>
                  <GlobalStyles />
                  <Toggle theme={theme} toggleTheme={toggleTheme} />
              </>
          </ThemeProvider>
      </div>
  );
}

export default Darkmode2;
