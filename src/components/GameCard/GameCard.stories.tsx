import { GameCard } from './GameCard';
import { Game, SportType } from '../../types';

export default {
  title: 'Components/GameCard',
  component: GameCard,
};

const game: Game = {
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

export const Default = () => <GameCard game={game} onBetClick={() => {}} />;
