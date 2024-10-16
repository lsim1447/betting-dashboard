import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game, SportType } from '../types';
import { games as mockGames } from '../mockData';

interface GameState {
  games: Game[];
  filteredGames: Game[];
  selectedSport: SportType;
}

const initialState: GameState = {
  games: mockGames,
  filteredGames: mockGames,
  selectedSport: 'All',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    filterBySport: (state, action: PayloadAction<SportType>) => {
      state.selectedSport = action.payload;
      state.filteredGames =
        action.payload === 'All'
          ? state.games
          : state.games.filter((game) => game.sport === action.payload);
    },
    placeBet: (
      state,
      action: PayloadAction<{ gameId: number; team: 'A' | 'B' }>,
    ) => {
      const game = state.games.find((g) => g.id === action.payload.gameId);
      if (game) {
        if (action.payload.team === 'A') {
          game.teamA.betsPlaced++;
        } else {
          game.teamB.betsPlaced++;
        }
      }
    },
  },
});

export const { filterBySport, placeBet } = gameSlice.actions;
export default gameSlice.reducer;
