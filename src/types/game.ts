import { Team } from './team';

export type SportType = 'Soccer' | 'Basketball' | 'Baseball' | 'All';

export interface Game {
  id: number;
  sport: SportType;
  teamA: Team;
  teamB: Team;
}
