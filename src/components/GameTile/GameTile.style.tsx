import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 100px;
  padding: 0.6em 1.2em;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 0.25rem auto -webkit-focus-ring-color;
  }
  @media (prefers-color-scheme: light) {
    background-color: #f9f9f9;
  }
`;
