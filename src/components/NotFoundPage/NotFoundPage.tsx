import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../shared/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--gray-darkest-color);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin: 0;
  color: var(--red-color);
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin: 16px 0;
  max-width: 600px;
`;

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Title>404</Title>
      <Message>Oops! The page you're looking for does not exist.</Message>
      <Button onClick={handleGoHome}>Go to Homepage</Button>
    </Container>
  );
};

export default NotFound;
