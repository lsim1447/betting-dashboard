import { Team } from './team';

export enum SportType {
  All = 'All',
  Soccer = 'Soccer',
  Basketball = 'Basketball',
  Tennis = 'Tennis',
  Baseball = 'Baseball',
}

export interface Game {
  id: number;
  sport: SportType;
  teamA: Team;
  teamB: Team;
}
