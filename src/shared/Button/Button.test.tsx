import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders correctly with default variant (blue)', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyleRule(
      'background-color',
      'var(--blue-color)',
    );
  });

  test('renders correctly with green variant', () => {
    render(<Button variant="green">Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyleRule(
      'background-color',
      'var(--green-color)',
    );
  });

  test('renders correctly with red variant', () => {
    render(<Button variant="red">Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyleRule(
      'background-color',
      'var(--red-color)',
    );
  });

  test('changes background color on hover for blue variant', () => {
    render(<Button variant="blue">Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toHaveStyleRule(
      'background-color',
      'var(--blue-darker-color)',
      {
        modifier: ':hover',
      },
    );
  });
});
