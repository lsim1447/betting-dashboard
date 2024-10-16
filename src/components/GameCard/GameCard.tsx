import React from 'react';
import styled from 'styled-components';
import { Game } from '../../types';

interface GameCardProps {
  game: Game;
  onBetClick: (game: Game) => void;
}

const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  max-width: 350px;
  width: 100%;
  margin: 20px auto;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    margin: 20px;
  }
`;

const TeamName = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin: 0.5rem 0;
`;

const Odds = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const BetsPlaced = styled.p`
  font-size: 0.875rem;
  color: #777;
  margin-top: 5px;
`;

const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const TeamWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const Separator = styled.div`
  width: 50px;
  height: 2px;
  background-color: #ddd;
  margin: 0 10px;
`;

export const GameCard: React.FC<GameCardProps> = ({ game, onBetClick }) => {
  return (
    <Card>
      <TeamsContainer>
        <TeamWrapper>
          <TeamName>{game.teamA.name}</TeamName>
          <Odds>Odds: {game.teamA.odds}</Odds>
        </TeamWrapper>
        <Separator />
        <TeamWrapper>
          <TeamName>{game.teamB.name}</TeamName>
          <Odds>Odds: {game.teamB.odds}</Odds>
        </TeamWrapper>
      </TeamsContainer>
      <Button onClick={() => onBetClick(game)}>Place a Bet</Button>
      <BetsPlaced>
        Total Bets: {game.teamA.betsPlaced + game.teamB.betsPlaced}
      </BetsPlaced>
    </Card>
  );
};
