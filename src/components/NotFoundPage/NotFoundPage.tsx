import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #343a40;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin: 0;
  color: #dc3545;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin: 16px 0;
  max-width: 600px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
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
