import { render, screen, fireEvent } from '@testing-library/react';
import { GameCard } from './GameCard';

test('renders game card and calls onBetClick when button is clicked', () => {
  const mockGame = {
    id: 1,
    sport: 'Soccer',
    teamA: { name: 'Team A', odds: 1.5, betsPlaced: 10 },
    teamB: { name: 'Team B', odds: 2.5, betsPlaced: 15 },
  };
  const handleBetClick = jest.fn();

  render(<GameCard game={mockGame} onBetClick={handleBetClick} />);

  expect(screen.getByText(/Team A/i)).toBeInTheDocument();
  expect(screen.getByText(/Team B/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Place a Bet/i));
  expect(handleBetClick).toHaveBeenCalledWith(mockGame);
});
