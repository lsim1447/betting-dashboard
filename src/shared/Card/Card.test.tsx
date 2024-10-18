import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders the Card component correctly', () => {
    render(<Card>Test Card Content</Card>);

    const cardElement = screen.getByText(/Test Card Content/i);
    expect(cardElement).toBeInTheDocument();

    expect(cardElement).toHaveStyleRule(
      'background-color',
      'var(--white-color)',
    );
  });

  test('contains the correct text content', () => {
    render(<Card>This is a test card</Card>);

    const cardText = screen.getByText(/This is a test card/i);
    expect(cardText).toBeInTheDocument();
  });
});
