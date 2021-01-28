/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.35s linear;
  }
  small {
    display: none;
  }

  button {
      position: relative;
      z-index: 5;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;
