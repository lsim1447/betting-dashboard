import { render, screen } from '@testing-library/react';
import { Select } from './Select';
import 'jest-styled-components';

describe('Select Component', () => {
  test('renders correctly with default styles', () => {
    render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>,
    );

    expect(screen.getAllByRole('option')).toHaveLength(2);
  });

  test('applies active styles', () => {
    const { container } = render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>,
    );
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      '#e2e6ea',
      {
        modifier: ':active',
      },
    );
  });
});
