import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Globalstyle";
import { lightTheme, darkTheme } from "./Themes";
import  {useDarkMode} from "./useDarkMode"
import Toggle from "./Toggler"


const Darkmode = () => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if(!mountedComponent) return <div />
    return (
        
          <ThemeProvider theme={themeMode}>
            <Toggle theme={theme} toggleTheme={themeToggler} />
                <GlobalStyles />
                <button onClick={themeToggler}>Switch Theme</button>
          </ThemeProvider>
      
    )
  }

  export default Darkmode;
