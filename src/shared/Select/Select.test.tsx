import { render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('Select Component', () => {
  test('renders correctly and contains options', () => {
    render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>,
    );

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(2);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('applies active styles', () => {
    render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>,
    );

    expect(screen.getByRole('combobox')).toHaveStyleRule(
      'background-color',
      'var(--gray-ligher-color)',
      {
        modifier: ':active',
      },
    );
  });
});
