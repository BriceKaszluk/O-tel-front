import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

const ToggleContainer = styled.button`
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  z-index:5;
  box-shadow: 0px 7px 38px -6px rgba(143,141,143,0.86);
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 8rem;
  height: 3.5rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  svg {
    width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }

@media only screen and (max-width: 1023px) {
    position: absolute;
    left: 0rem;
    top: 1.5rem;
    margin: 1rem auto 0 0.5rem;
    z-index: 100;
  }

  @media only screen and (max-width: 728px) {
    width: 6rem;
    height: 3rem;

    svg {
    width: 2rem;
    height: auto;
    transition: all 0.3s linear;
  }
}
  @media only screen and (max-width: 480px) {
    width: 5rem;
    height: 2.5rem;

    svg {
    width: 1.5rem;
    height: auto;
    transition: all 0.3s linear;
  }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
      <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
          <SunIcon />
          <MoonIcon />
      </ToggleContainer>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
};

export default Toggle;
