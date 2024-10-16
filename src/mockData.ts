import { Game } from './types';

export const games: Game[] = [
  {
    id: 1,
    sport: 'Soccer',
    teamA: { name: 'Team A', odds: 1.5, betsPlaced: 10 },
    teamB: { name: 'Team B', odds: 2.5, betsPlaced: 15 },
  },
  {
    id: 2,
    sport: 'Basketball',
    teamA: { name: 'Team C', odds: 1.8, betsPlaced: 5 },
    teamB: { name: 'Team D', odds: 1.9, betsPlaced: 20 },
  },
  {
    id: 3,
    sport: 'Baseball',
    teamA: { name: 'Team E', odds: 2.1, betsPlaced: 12 },
    teamB: { name: 'Team F', odds: 1.7, betsPlaced: 8 },
  },
];
