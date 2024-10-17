import styled from 'styled-components';

export const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 2px solid var(--blue-color);
  background-color: var(--white-color);
  font-size: 16px;
  color: #333;
  outline: none;
  cursor: pointer;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover,
  &:focus {
    border-color: var(--blue-darker-color);
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  }

  &:active {
    background-color: var(--gray-ligher-color);
  }
`;
