import { Team } from './team';

export type SportType = 'Soccer' | 'Basketball' | 'Baseball' | 'All';

export interface Game {
  id: number;
  sport: string;
  teamA: Team;
  teamB: Team;
}
