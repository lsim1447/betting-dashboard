import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #007bff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/">Gamdom</NavLink>
      <NavLink to="/login"> Log In </NavLink>
    </Nav>
  );
};
