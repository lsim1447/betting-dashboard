import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { filterBySport, placeBet } from '../../features/gameSlice';
import { GameCard } from '../GameCard';
import { BetModal } from '../BetModal';
import { Game } from '../../types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  select {
    padding: 10px;
    margin-right: 10px;
  }
`;

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { filteredGames } = useSelector((state: RootState) => state.game);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterBySport(e.target.value as any));
  };

  const handleBetClick = (game: Game) => {
    setSelectedGame(game);
  };

  const handleBetSubmit = (team: 'A' | 'B') => {
    if (selectedGame) {
      dispatch(placeBet({ gameId: selectedGame.id, team }));
      setSelectedGame(null);
    }
  };

  return (
    <div>
      <Filter>
        <select onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Soccer">Soccer</option>
          <option value="Basketball">Basketball</option>
          <option value="Baseball">Baseball</option>
        </select>
      </Filter>

      <Grid>
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} onBetClick={handleBetClick} />
        ))}
      </Grid>

      {selectedGame && (
        <BetModal
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
          onBetSubmit={handleBetSubmit}
        />
      )}
    </div>
  );
};
