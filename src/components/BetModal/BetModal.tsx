import React, { useState } from 'react';
import styled from 'styled-components';
import { Game } from '../../types';
import { Button } from '../../shared/Button';
import { Input } from '../../shared/Input';

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
  max-width: 500px;
  width: 100%;
  text-align: center;
  position: relative;
`;

const ModalSubTitle = styled.h3`
  color: var(--gray-darkest-color);
  font-size: 1.2rem;
  margin-bottom: 64px;
`;

const ErrorMessage = styled.p`
  color: var(--red-color);
  font-size: 1rem;
  margin: 0;
  margin-bottom: 24px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const RowWrapper = styled.div`
  margin-bottom: 20px;
`;

const CloseIcon = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: var(--gray-dark-color);

  &:hover {
    color: var(--red-color);
  }
`;

const TeamButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 12px 24px;
  margin: 0;
  font-size: 1rem;
  color: ${(props) =>
    props.selected ? 'var(--white-color)' : 'var(--blue-color)'};
  background-color: ${(props) =>
    props.selected ? 'var(--blue-color)' : 'var(--white-color)'};
  border: 2px solid var(--blue-color);
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: var(--blue-darker-color);
    color: var(--white-color);
  }

  &:focus {
    outline: none;
  }
`;

const LabelText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: var(--gray-darkest-color);
  margin-bottom: 18px;
  text-align: left;
`;

export const BetModal: React.FC<BetModalProps> = ({
  game,
  onClose,
  onBetSubmit,
}) => {
  const [selectedTeam, setSelectedTeam] = useState<'A' | 'B'>('A');
  const [betAmount, setBetAmount] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  if (!game) return null;

  const handleBetSubmit = () => {
    if (betAmount > 0) {
      setErrorMessage('');
      onBetSubmit(selectedTeam, betAmount);
    } else {
      setErrorMessage('The bet amount must be higher than 0 $');
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <CloseIcon onClick={onClose}>×</CloseIcon>

        <ModalSubTitle>
          {game.teamA.name} - {game.teamB.name}
        </ModalSubTitle>

        <LabelText>Pick your winning team:</LabelText>
        <RowWrapper>
          <FlexContainer>
            <div>{game.teamA.name}</div>
            <div>{game.teamB.name}</div>
          </FlexContainer>
        </RowWrapper>

        <RowWrapper>
          <FlexContainer>
            <TeamButton
              selected={selectedTeam === 'A'}
              onClick={() => setSelectedTeam('A')}
            >
              {game.teamA.odds}
            </TeamButton>
            <TeamButton
              selected={selectedTeam === 'B'}
              onClick={() => setSelectedTeam('B')}
            >
              {game.teamB.odds}
            </TeamButton>
          </FlexContainer>
        </RowWrapper>

        <LabelText>Enter your bet amount:</LabelText>
        <FlexContainer>
          <Input
            type="text"
            id="currency"
            value={'USD ($)'}
            disabled={true}
            onChange={(e) => {}}
          />
          <Input
            type="number"
            id="bet-amount"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            placeholder="Enter amount"
          />
        </FlexContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <RowWrapper>
          <FlexContainer>
            {[10, 20, 30, 50, 100].map((amount: number) => {
              return (
                <Button
                  key={`predefined-amount-${amount}`}
                  variant="secondary"
                  onClick={() => setBetAmount(amount)}
                >
                  {amount} $
                </Button>
              );
            })}
          </FlexContainer>
        </RowWrapper>

        <FlexContainer>
          <Button variant={'primary'} onClick={handleBetSubmit}>
            Submit Bet
          </Button>
        </FlexContainer>
      </ModalContent>
    </ModalContainer>
  );
};
