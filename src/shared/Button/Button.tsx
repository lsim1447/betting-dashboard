import styled, { css } from 'styled-components';
import { ButtonHTMLAttributes } from 'react';
import shouldForwardProp from '@styled-system/should-forward-prop';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'green' | 'red';
}

const buttonVariants = {
  blue: css`
    background-color: var(--blue-color);
    &:hover {
      background-color: var(--blue-darker-color);
    }
  `,
  green: css`
    background-color: var(--green-color);
    &:hover {
      background-color: var(--green-darker-color);
    }
  `,
  red: css`
    background-color: var(--red-color);
    &:hover {
      background-color: var(--red-darker-color);
    }
  `,
};

// Use shouldForwardProp to prevent the `variant` prop from being passed to the DOM
export const Button = styled('button').withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== 'variant',
})<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  ${({ variant = 'blue' }) => buttonVariants[variant]}

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
