/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  small {
    display: none;
  }

  button {
      position: absolute;
      z-index: 5;
      top: 10px;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;
