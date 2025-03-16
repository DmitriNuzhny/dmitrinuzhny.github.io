import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJsSquare, FaAws, FaShopify, FaMicrosoft } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SectionContainer, Heading1, Paragraph, Button } from '../styles/MainStyles.ts';

const HeroSection = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: calc(100vh - 200px);
  padding-top: ${props => props.theme.spacing['3xl']};
  padding-bottom: ${props => props.theme.spacing['3xl']};
`;

const Name = styled(Heading1)`
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes['5xl']};
  background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: 500;
  color: ${props => props.theme.colors.lightText};
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

const Summary = styled(Paragraph)`
  max-width: 800px;
  margin-bottom: ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fontSizes.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.md};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Button)`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fontSizes.md};
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;

const TechStackSection = styled.div`
  margin-top: ${props => props.theme.spacing.xl};
`;

const TechTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.lightText};
  margin-bottom: ${props => props.theme.spacing.md};
  font-weight: 500;
`;

const TechIcons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
`;

const TechIcon = styled(motion.div)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection>
        <Name>Dmitri Nuzhny</Name>
        <Title>Full-stack Software Engineer</Title>
        <Summary>
          Seasoned Full-stack Software Engineer with over 6 years of experience delivering scalable, high-performance 
          applications across eCommerce, education, and logistics industries. Proven expertise in React, Node.js, 
          TypeScript, Shopify, and cloud platforms like Azure and AWS.
        </Summary>
        <ButtonsContainer>
          <PrimaryButton as={Link} to="/contact">Contact Me</PrimaryButton>
          <SecondaryButton to="/projects">View Projects</SecondaryButton>
        </ButtonsContainer>
        
        <TechStackSection>
          <TechTitle>Tech Stack</TechTitle>
          <TechIcons>
            <TechIcon
              whileHover={{ y: -5 }}
              whileTap={{ y: 0 }}
            >
              <FaReact title="React" />
            </TechIcon>
            <TechIcon
              whileHover={{ y: -5 }}
              whileTap={{ y: 0 }}
            >
              <FaNodeJs title="Node.js" />
            </TechIcon>
            <TechIcon
              whileHover={{ y: -5 }}
              whileTap={{ y: 0 }}
            >
              <SiTypescript title="TypeScript" />
            </TechIcon>
            <TechIcon
              whileHover={{ y: -5 }}
              whileTap={{ y: 0 }}
            >
              <FaJsSquare title="JavaScript" />
            </TechIcon>
            <TechIcon
              whileHover={{ y: -5 }}
              whileTap={{ y: 0 }}
            >
              <FaMicrosoft title="Azure" />
            </TechIcon>
            <TechIcon
              whileHover={{ y: -5 }}
              whileTap={{ y: 0 }}
            >
              <FaAws title="AWS" />
            </TechIcon>
            <TechIcon
              whileHover={{ y: -5 }}
              whileTap={{ y: 0 }}
            >
              <FaShopify title="Shopify" />
            </TechIcon>
          </TechIcons>
        </TechStackSection>
      </HeroSection>
    </motion.div>
  );
};

export default Home; 