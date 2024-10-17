import { render } from '@testing-library/react';
import { Card } from './Card';
import 'jest-styled-components';

describe('Card Component', () => {
  test('renders with default styles', () => {
    const { container } = render(<Card>Test Card Content</Card>);

    expect(container.firstChild).toHaveStyleRule('background-color', '#fff');
    expect(container.firstChild).toHaveStyleRule('text-align', 'center');
    expect(container.firstChild).toHaveStyleRule(
      'transition',
      'transform 0.2s,box-shadow 0.2s',
    );
  });
});
