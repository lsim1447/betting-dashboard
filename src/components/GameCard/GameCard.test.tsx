import { render, screen, fireEvent } from '@testing-library/react';
import { GameCard } from './GameCard';
import { Game, SportType } from '../../types';

test('renders game card and calls onBetClick when button is clicked', () => {
  const mockGame: Game = {
    id: 1,
    sport: SportType.Soccer,
    teamA: {
      name: 'Team A',
      odds: 1.5,
      betsPlaced: 10,
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    },
    teamB: {
      name: 'Team B',
      odds: 2.5,
      betsPlaced: 15,
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    },
  };
  const handleBetClick = jest.fn();

  render(<GameCard game={mockGame} onBetClick={handleBetClick} />);

  expect(screen.getByText(/Team A/i)).toBeInTheDocument();
  expect(screen.getByText(/Team B/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Place a Bet/i));
  expect(handleBetClick).toHaveBeenCalledWith(mockGame);
});
