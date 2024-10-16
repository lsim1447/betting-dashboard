import React, { useState } from 'react';
import styled from 'styled-components';
import { Game } from '../../types';

interface BetModalProps {
  game: Game | null;
  onClose: () => void;
  onBetSubmit: (team: 'A' | 'B') => void;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px); /* Added blur effect for better focus */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const TeamSelector = styled.div`
  margin-bottom: 20px;
  font-size: 1rem;

  select {
    font-size: 1rem;
    padding: 10px;
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:nth-child(1) {
    background-color: #28a745;
    color: white;
  }

  &:nth-child(2) {
    background-color: #dc3545;
    color: white;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const BetModal: React.FC<BetModalProps> = ({
  game,
  onClose,
  onBetSubmit,
}) => {
  const [team, setTeam] = useState<'A' | 'B'>('A');

  if (!game) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Place a Bet</ModalTitle>
        <TeamSelector>
          <label htmlFor="team-select">Select Team:</label>
          <select
            id="team-select"
            value={team}
            onChange={(e) => setTeam(e.target.value as 'A' | 'B')}
          >
            <option value="A">
              {game.teamA.name} (Odds: {game.teamA.odds})
            </option>
            <option value="B">
              {game.teamB.name} (Odds: {game.teamB.odds})
            </option>
          </select>
        </TeamSelector>
        <ModalActions>
          <Button onClick={() => onBetSubmit(team)}>Submit Bet</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalActions>
      </ModalContent>
    </ModalContainer>
  );
};
