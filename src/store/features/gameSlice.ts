import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game, SportType } from '../../types';
import { games as mockGames } from '../../mockData';

interface GameState {
  games: Game[];
  filteredGames: Game[];
  selectedSport: SportType;
}

const initialState: GameState = {
  games: mockGames,
  filteredGames: mockGames,
  selectedSport: SportType.All,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    filterBySport: (state, action: PayloadAction<SportType>) => {
      state.selectedSport = action.payload;
      state.filteredGames =
        action.payload === SportType.All
          ? state.games
          : state.games.filter((game) => game.sport === action.payload);
    },
    placeBet: (
      state,
      action: PayloadAction<{ gameId: number; team: 'A' | 'B' }>,
    ) => {
      let game: Game | undefined;

      // Override the original games list - to not lose the data after filtering
      // We could make sure the components that rely on filteredGames are re-rendered
      // and not modify the filteredGames here
      game = state.games.find((g: Game) => g.id === action.payload.gameId);
      if (game) {
        if (action.payload.team === 'A') {
          game.teamA.betsPlaced++;
        } else {
          game.teamB.betsPlaced++;
        }
      }

      // Change that specific element in filteredGames list too
      game = state.filteredGames.find(
        (g: Game) => g.id === action.payload.gameId,
      );
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
