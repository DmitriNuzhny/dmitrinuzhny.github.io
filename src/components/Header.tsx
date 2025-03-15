import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.lightBackground};
  box-shadow: ${props => props.theme.boxShadow.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 60px;
    background-color: ${props => props.theme.colors.lightBackground};
    box-shadow: ${props => props.theme.boxShadow.lg};
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.md};
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.xl};
  cursor: pointer;
  z-index: 1000;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  z-index: 998;
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo>Dmitri Nuzhny</Logo>
        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        <NavLinks isOpen={isOpen}>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/experience">Experience</StyledNavLink>
          <StyledNavLink to="/projects">Projects</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </NavLinks>
      </NavContainer>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </HeaderContainer>
  );
};

export default Header; 