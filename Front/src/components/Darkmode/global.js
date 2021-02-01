/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body, .navbar-item, .navbar-link {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.35s linear;
  }
  small {
    display: none;
  }

  button {
      position: relative;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
  .label {
    color: ${({ theme }) => theme.text};
  }
  .navbar-item, .navbar-link {
    color: ${({ theme }) => theme.text};
  }
`;
