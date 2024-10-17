import React from 'react';
import styled from 'styled-components';
import { Game } from '../../types';
import { Button } from '../../shared/Button/Button';
import { Card } from '../../shared/Card/Card';

interface GameCardProps {
  game: Game;
  onBetClick: (game: Game) => void;
}

const TeamName = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin: 0.5rem 0;
`;

const TeamLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 5px;
`;

const Odds = styled.p`
  font-size: 1rem;
  color: #666;
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
          <TeamLogo src={game.teamA.logoUrl} alt={game.teamA.name} />
          <TeamName>{game.teamA.name}</TeamName>
          <Odds>Odds: {game.teamA.odds}</Odds>
        </TeamWrapper>
        <Separator />
        <TeamWrapper>
          <TeamLogo src={game.teamB.logoUrl} alt={game.teamB.name} />
          <TeamName>{game.teamB.name}</TeamName>
          <Odds>Odds: {game.teamB.odds}</Odds>
        </TeamWrapper>
      </TeamsContainer>
      <Button variant={'blue'} onClick={() => onBetClick(game)}>
        Place a Bet
      </Button>
      <BetsPlaced>
        Total Bets: {game.teamA.betsPlaced + game.teamB.betsPlaced}
      </BetsPlaced>
    </Card>
  );
};
