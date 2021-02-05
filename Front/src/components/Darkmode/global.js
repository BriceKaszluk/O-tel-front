/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body, .navbar-item, .navbar-link {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 1.35s linear;
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
  .label, .acceptTerm_p {
    color: ${({ theme }) => theme.text};
  }
  .navbar-item, .navbar-link {
    color: ${({ theme }) => theme.text};
  }
  .navbar-burger {
    color: ${({ theme }) => theme.text};
  }
  .navbar-menu, .navbar-link, .navbar-item, .navbar-dropdown {
    background-color: ${({ theme }) => theme.body};
  }
`;
