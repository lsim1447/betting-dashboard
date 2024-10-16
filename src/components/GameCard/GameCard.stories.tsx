import { GameCard } from './GameCard';
import { Game } from '../../types';

export default {
  title: 'Components/GameCard',
  component: GameCard,
};

const game: Game = {
  id: 1,
  sport: 'Soccer',
  teamA: { name: 'Team A', odds: 1.5, betsPlaced: 10 },
  teamB: { name: 'Team B', odds: 2.5, betsPlaced: 15 },
};

export const Default = () => <GameCard game={game} onBetClick={() => {}} />;
