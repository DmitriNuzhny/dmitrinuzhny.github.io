import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  padding: ${props => props.theme.spacing.xl} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.lg};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SocialLink = styled.a`
  color: white;
  font-size: ${props => props.theme.fontSizes['2xl']};
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const ContactInfo = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.fontSizes.md};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Copyright = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.8);
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://github.com/dmitrinuzhny" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/dmitrinuzhny" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:dmitrinuzhny@outlook.com" aria-label="Email">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>

        <ContactInfo>
          <ContactItem>
            <FaEnvelope />
            <span>dmitrinuzhny@outlook.com</span>
          </ContactItem>
          <ContactItem>
            <FaPhone />
            <span>(845) 499-6018</span>
          </ContactItem>
        </ContactInfo>

        <Copyright>
          &copy; {currentYear} Dmitri Nuzhny. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 