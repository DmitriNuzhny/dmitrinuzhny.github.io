import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SectionContainer, Heading1, Heading2, Paragraph, Badge, Card } from '../styles/MainStyles.ts';

const ProjectsSection = styled(SectionContainer)`
  padding-top: ${props => props.theme.spacing['3xl']};
  padding-bottom: ${props => props.theme.spacing['3xl']};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProjectTitle = styled(Heading2)`
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const TechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.md};
  margin-top: auto;
  padding-top: ${props => props.theme.spacing.md};
`;

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Alaninu',
      description: 'Built all the pages for the website based on the design provided by the client on Shopify.',
      link: 'https://alaninu.com',
      technologies: ['Shopify', 'Liquid', 'HTML/CSS', 'JavaScript', 'Shopify API']
    },
    {
      id: 2,
      title: 'DeliverLogic',
      description: 'Built delivery management features and visual monitoring for restaurants. Implemented automated customer support and food ordering APIs.',
      link: 'https://deliverlogic.com',
      technologies: ['PHP', 'JavaScript', 'Google Charts', 'Twilio', 'Slack API', 'MySQL']
    },
    {
      id: 3,
      title: 'Santa Fe College Portal',
      description: 'Developed student self-service portals for enrollment, aid, and coursework. Created backend services for record and transcript handling.',
      link: 'https://sfcollege.edu',
      technologies: ['Angular', 'Spring Boot', 'Java', 'Hibernate', 'JPA', 'SQL']
    },
    {
      id: 4,
      title: 'Navient Financial Aid Platform',
      description: 'Built centralized platforms for student data processing using Node.js. Created REST APIs for external college integration.',
      link: 'https://navient.com',
      technologies: ['Node.js', 'React', 'TypeScript', 'Redux', 'SQL', 'REST APIs']
    },
    {
      id: 5,
      title: 'BDS Suspension & Akeneo Integration',
      description: 'Engineered custom apps for Shopify and data synchronization with Akeneo. Designed gallery and product showcase systems.',
      link: 'https://bds-suspension.com',
      technologies: ['Shopify', 'Liquid', 'Node.js', 'React', 'Akeneo', 'Azure']
    },
    {
      id: 6,
      title: 'Social Media Gallery',
      description: 'Developed a social media gallery app using React and Node.js, showcasing customer builds. Integrated with various social media APIs to automatically fetch and display user-generated content.',
      link: 'https://bds-suspension.com/pages/gallery',
      technologies: ['React', 'Node.js', 'TypeScript', 'Social Media APIs', 'Azure']
    },
    {
      id: 7,
      title: 'Akeneo-Shopify Integration',
      description: 'Built a custom integration module to synchronize product data between Akeneo PIM and Shopify. Enabled enterprise clients to manage thousands of unique products with dynamic pricing and variants.',
      link: 'https://serenity-foxfactory.cloud.akeneo.com',
      technologies: ['Node.js', 'Akeneo API', 'Shopify API', 'Azure Functions', 'TypeScript']
    },
    {
      id: 8,
      title: 'DentalMarketPlace',
      description: 'Implemented multi-brand product import tools and warehouse shipping logic. Managed Shopify theme and store app integration.',
      link: 'https://dentalmarketplace.shop',
      technologies: ['Shopify', 'Liquid', 'HTML/CSS', 'JavaScript', 'Node.js', 'React']
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsSection>
        <Heading1>Projects</Heading1>
        <Paragraph>
          Here are some of the key projects I've worked on throughout my career. These projects showcase my 
          experience in building scalable applications, integrating APIs, and developing custom solutions 
          for various industries.
        </Paragraph>
        
        <ProjectsGrid>
          {projects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Paragraph>{project.description}</Paragraph>
              
              <ProjectLinks>
                {project.link && (
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Visit Site
                  </ProjectLink>
                )}
                {project.github && (
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> View Code
                  </ProjectLink>
                )}
              </ProjectLinks>
              
              <TechBadges>
                {project.technologies.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </TechBadges>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsSection>
    </motion.div>
  );
};

export default Projects; 