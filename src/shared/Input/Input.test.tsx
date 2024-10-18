import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  test('renders correctly', () => {
    render(<Input placeholder="Enter text here" />);

    const inputElement = screen.getByPlaceholderText('Enter text here');
    expect(inputElement).toBeInTheDocument();
  });
});
