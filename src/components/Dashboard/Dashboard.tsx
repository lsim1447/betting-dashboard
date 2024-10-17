import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { placeBet } from '../../store/features/gameSlice';
import { GameCard } from '../GameCard';
import { BetModal } from '../BetModal';
import { Game } from '../../types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  gap: 50px;
`;

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { filteredGames } = useSelector((state: RootState) => state.game);

  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

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
      <Grid>
        {filteredGames?.length === 0 && (
          <div>There are no matching sport events.</div>
        )}
        {filteredGames.length &&
          filteredGames.map((game) => (
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
