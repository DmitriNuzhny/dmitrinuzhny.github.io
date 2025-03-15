import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.primary};
`;

export const SectionContainer = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => props.theme.spacing.md};
  }
`;

export const Heading1 = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.primary};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

export const Heading2 = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.secondary};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

export const Heading3 = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.secondary};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text};
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${props => props.theme.transitions.fast};

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const Card = styled.div`
  background-color: ${props => props.theme.colors.lightBackground};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.boxShadow.md};
  padding: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
  transition: transform ${props => props.theme.transitions.normal}, box-shadow ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadow.lg};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.lg};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

export const Badge = styled.span`
  display: inline-block;
  background-color: ${props => props.theme.colors.accent};
  color: white;
  border-radius: ${props => props.theme.borderRadius.full};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-right: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
`; 