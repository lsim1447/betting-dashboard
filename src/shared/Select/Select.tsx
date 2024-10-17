import styled from 'styled-components';

export const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #007bff;
  background-color: #f9f9f9;
  font-size: 16px;
  color: #333;
  outline: none;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus {
    border-color: #0056b3;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  }

  &:active {
    background-color: #e2e6ea;
  }
`;
