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
      title: 'DeliverLogic',
      description: 'Developed features for restaurant delivery management systems, improving order processing efficiency by integrating Google visualization framework. Implemented Twilio 2FA, 7-Eleven food ordering services, and automated customer support using Slaask API.',
      link: 'https://deliverlogic.com',
      technologies: ['PHP', 'JavaScript', 'Google Visualization', 'Twilio API', 'Slaask API']
    },
    {
      id: 2,
      title: 'Santa Fe College Portal',
      description: 'Built a student portal for account management, class enrollment, financial aid applications, and coursework tracking using Angular and Spring Boot. Developed backend services to manage student records and handle academic transcript requests.',
      link: 'https://sfcollege.edu',
      technologies: ['Angular', 'Spring Boot', 'Java', 'Hibernate', 'JPA', 'SQL']
    },
    {
      id: 3,
      title: 'Navient Financial Aid Platform',
      description: 'Led the development of a data centralization platform for student financial aid data, connecting multiple college networks using Node.js. Built secure APIs to provide colleges with real-time access to student financial records.',
      link: 'https://navient.com',
      technologies: ['Node.js', 'React', 'TypeScript', 'Redux', 'SQL', 'REST APIs']
    },
    {
      id: 4,
      title: 'BDS Suspension',
      description: 'Developed custom PDP and collection templates according to the design, and built a custom app to manage products. Delivered custom Shopify integrations to manage dynamic product data from Akeneo PIM to Shopify.',
      link: 'https://bds-suspension.com',
      github: 'https://github.com/dmitrinuzhny',
      technologies: ['Shopify', 'Liquid', 'Node.js', 'React', 'Akeneo', 'Azure']
    },
    {
      id: 5,
      title: 'Social Media Gallery',
      description: 'Developed a social media gallery app using React and Node.js, showcasing customer builds. Integrated with various social media APIs to automatically fetch and display user-generated content.',
      github: 'https://github.com/dmitrinuzhny',
      technologies: ['React', 'Node.js', 'TypeScript', 'Social Media APIs', 'Azure']
    },
    {
      id: 6,
      title: 'Akeneo-Shopify Integration',
      description: 'Built a custom integration module to synchronize product data between Akeneo PIM and Shopify. Enabled enterprise clients to manage thousands of unique products with dynamic pricing and variants.',
      github: 'https://github.com/dmitrinuzhny',
      technologies: ['Node.js', 'Akeneo API', 'Shopify API', 'Azure Functions', 'TypeScript']
    }
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