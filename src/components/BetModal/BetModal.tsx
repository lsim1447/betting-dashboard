import React, { useState } from 'react';
import styled from 'styled-components';
import { Game } from '../../types';
import { Button } from '../../shared/Button/Button';

interface BetModalProps {
  game: Game | null;
  onClose: () => void;
  onBetSubmit: (team: 'A' | 'B', amount: number) => void;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
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
  max-width: 700px;
  width: 100%;
  text-align: center;
`;

const ModalTitle = styled.h2`
  font-size: 2.4rem;
  margin-top: 0;
  margin-bottom: 4rem;
  color: #333;
`;

const ModalSubTitle = styled.h4`
  color: #333;
  font-size: 1.1rem;
  text-decoration: underline;
  margin-bottom: 64px;
`;

const TeamSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TeamButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 12px 24px;
  margin: 0 10px;
  font-size: 1rem;
  color: ${(props) => (props.selected ? '#fff' : '#007bff')};
  background-color: ${(props) => (props.selected ? '#007bff' : '#fff')};
  border: 2px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

const AmountInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-align: center;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const CustomLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const BetModal: React.FC<BetModalProps> = ({
  game,
  onClose,
  onBetSubmit,
}) => {
  const [selectedTeam, setSelectedTeam] = useState<'A' | 'B'>('A');
  const [betAmount, setBetAmount] = useState<number>(0);

  if (!game) return null;

  const handleBetSubmit = () => {
    if (betAmount > 0) {
      onBetSubmit(selectedTeam, betAmount);
    } else {
      alert('Please enter a valid bet amount.');
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Place a Bet</ModalTitle>

        <ModalSubTitle>
          {game.teamA.name} - {game.teamB.name}
        </ModalSubTitle>

        <CustomLabel>Pick your winning team:</CustomLabel>
        <TeamSelector>
          <TeamButton
            selected={selectedTeam === 'A'}
            onClick={() => setSelectedTeam('A')}
          >
            {game.teamA.name} (Odds: {game.teamA.odds})
          </TeamButton>
          <TeamButton
            selected={selectedTeam === 'B'}
            onClick={() => setSelectedTeam('B')}
          >
            {game.teamB.name} (Odds: {game.teamB.odds})
          </TeamButton>
        </TeamSelector>

        <Label htmlFor="bet-amount">Enter your bet amount ($):</Label>
        <AmountInput
          type="number"
          id="bet-amount"
          value={betAmount}
          onChange={(e) => setBetAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />

        <ModalActions>
          <Button variant={'green'} onClick={handleBetSubmit}>
            Submit Bet
          </Button>
          <Button variant={'red'} onClick={onClose}>
            Cancel
          </Button>
        </ModalActions>
      </ModalContent>
    </ModalContainer>
  );
};
