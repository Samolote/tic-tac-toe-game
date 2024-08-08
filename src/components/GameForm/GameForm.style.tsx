import styled, { css } from 'styled-components';

const sharedInputStyles = css`
  padding: 0.6em 1.2em;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  background-color: #1a1a1a;
  font-size: 1em;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 0.9em;
  text-align: left;
`;

const Input = styled.input`
  ${sharedInputStyles}
`;

const Button = styled.button`
  ${sharedInputStyles}
  cursor: pointer;
`;

export { Form, Label, Input, Button };
