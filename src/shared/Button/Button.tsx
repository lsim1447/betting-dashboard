import styled, { css } from 'styled-components';
import { ButtonHTMLAttributes } from 'react';
import shouldForwardProp from '@styled-system/should-forward-prop';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'green' | 'red';
}

const buttonVariants = {
  blue: css`
    background-color: #007bff;
    &:hover {
      background-color: #0056b3;
    }
  `,
  green: css`
    background-color: #28a745;
    &:hover {
      background-color: #218838;
    }
  `,
  red: css`
    background-color: #dc3545;
    &:hover {
      background-color: #c82333;
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
