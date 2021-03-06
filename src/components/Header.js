import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <Nav>
      <Logo>Fruit Emporium</Logo>
      <LinkContainer>
        <Links>
          <StyledLink exact to="/" activeClassName='selected'>Home</StyledLink>
        </Links>
        <Links>
          <StyledLink to="/about" activeClassName='selected'>About</StyledLink>
        </Links>
      </LinkContainer>
    </Nav>
  );
};

const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkContainer = styled.div`
  margin: 1rem;
  color: purple;
  display: flex;
`;

const Links = styled.div`
  margin: 0.5rem;
  text-decoration: none;
  font-size: 0.9rem;
`;

const Logo = styled.h2`
  font-size: 2rem;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;

  &:hover {
    color: red;
    border-bottom: 2px solid red;
  }

  &.selected {
    color: red; 
    border-bottom: 2px solid red;
  }
`;
