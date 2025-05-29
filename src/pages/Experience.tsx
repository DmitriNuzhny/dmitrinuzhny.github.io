import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionContainer, Heading1, Heading3, Paragraph, Badge } from '../styles/MainStyles.ts';

const ExperienceSection = styled(SectionContainer)`
  padding-top: ${props => props.theme.spacing['3xl']};
  padding-bottom: ${props => props.theme.spacing['3xl']};
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
`;

const ExperienceItem = styled.div`
  position: relative;
  padding-left: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.xl};
  border-left: 2px solid ${props => props.theme.colors.border};
  
  &:last-child {
    border-left: 2px solid transparent;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const JobTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.text};
`;

const Company = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.primary};
`;

const Period = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightText};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ResponsibilitiesList = styled.ul`
  margin-top: ${props => props.theme.spacing.md};
  margin-left: ${props => props.theme.spacing.md};
  
  li {
    margin-bottom: ${props => props.theme.spacing.sm};
  }
`;

const TechStack = styled.div`
  margin-top: ${props => props.theme.spacing.md};
`;

const TechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.xs};
`;

const Experience: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ExperienceSection>
        <Heading1>Professional Experience</Heading1>
        <ExperienceContainer>
          <ExperienceItem>
            <JobTitle>Senior Software Engineer</JobTitle>
            <Company>Fox Factory</Company>
            <Period>January 2023 – Present</Period>
            <ResponsibilitiesList>
              <li>Led development of large-scale Akeneo-Shopify application for the BDS Suspension team, resulting in a successful brand launch and over 2x ARR from BDS e-commerce products.</li>
              <li>Architected module using Node.js, MongoDB, and GraphQL to import dynamic product data such as pricing, metafields, and variants from PIM to Shopify for enterprise truck parts manufacturer selling thousands of unique products.</li>
              <li>Implemented auxiliary apps using React and Node.js such as a social media gallery for customer builds.</li>
              <li>Contributed to theme code in Liquid and JS, updated legacy PHP site, and built C# backend on Azure and assisted mobile developers to connect Flutter app to authentication and data endpoints.</li>
              <li>Managed various Azure resources including AD B2C Auth, Function App, Blob/File Storage, DB, etc.</li>
            </ResponsibilitiesList>
            <TechStack>
              <Heading3>Technologies Used:</Heading3>
              <TechBadges>
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Shopify</Badge>
                <Badge>Akeneo</Badge>
                <Badge>Azure</Badge>
                <Badge>PHP</Badge>
                <Badge>C#</Badge>
                <Badge>MongoDB</Badge>
                <Badge>GraphQL</Badge>
                <Badge>Flutter</Badge>
              </TechBadges>
            </TechStack>
          </ExperienceItem>

          <ExperienceItem>
            <JobTitle>Full-Stack Software Engineer</JobTitle>
            <Company>Navient</Company>
            <Period>August 2020 – December 2022</Period>
            <ResponsibilitiesList>
              <li>Spearheaded migration of large-scale financial aid processing system to Express backend, centralizing data for over 200 college networks on a modernized system.</li>
              <li>Developed secure, RESTful APIs to integrate college networks with Navient's centralized financial system, enabling real-time data retrieval for student financial aid.</li>
              <li>Enhanced the user experience for college admins by developing an intuitive React with Typescript frontend using Redux for state management and MSSQL Server.</li>
              <li>Implemented real-time updates for financial aid records using websockets to improve system responsiveness and user experience.</li>
              <li>Collaborated with frontend teams to ensure proper deployment of Twilio Flex plugins, as well as handling DevOps, using Docker for containerization and Jenkins for CI/CD.</li>
            </ResponsibilitiesList>
            <TechStack>
              <Heading3>Technologies Used:</Heading3>
              <TechBadges>
                <Badge>Node.js</Badge>
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Redux</Badge>
                <Badge>MSSQL</Badge>
                <Badge>REST APIs</Badge>
                <Badge>WebSocket</Badge>
                <Badge>Docker</Badge>
                <Badge>Jenkins</Badge>
                <Badge>Twilio</Badge>
              </TechBadges>
            </TechStack>
          </ExperienceItem>

          <ExperienceItem>
            <JobTitle>Full-Stack Developer</JobTitle>
            <Company>Santa Fe College</Company>
            <Period>May 2019 – August 2020</Period>
            <ResponsibilitiesList>
              <li>Played a key role in developing Santa Fe College's student portal, using React for the frontend and Node.js/Express for the backend, to streamline the system for class enrollment, financial aid management, and coursework tracking.</li>
              <li>Integrated MongoDB and Mongoose ODM to handle complex database relationships for storing student records, financial aid data, and academic transcripts.</li>
              <li>Used React hooks and functional components to implement clean, reusable UI elements, improving maintainability and reducing development time.</li>
              <li>Built several backend services including authentication using JWT, managing users, managing classes, transcripts, and various other administrative data used by the college network.</li>
            </ResponsibilitiesList>
            <TechStack>
              <Heading3>Technologies Used:</Heading3>
              <TechBadges>
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Mongoose</Badge>
                <Badge>JWT</Badge>
                <Badge>REST APIs</Badge>
                <Badge>Java</Badge>
                <Badge>Spring Boot</Badge>
              </TechBadges>
            </TechStack>
          </ExperienceItem>

          <ExperienceItem>
            <JobTitle>Junior Full-Stack Developer</JobTitle>
            <Company>DeliverLogic</Company>
            <Period>June 2018 – February 2019</Period>
            <ResponsibilitiesList>
              <li>Contributed to building modern, responsive web pages in React and Node.js for a food delivery service, resulting in increased revenue for several B2B sales channels within the application.</li>
              <li>Integrated third-party API services such as Twilio for two-factor auth and updated various Google Maps functions for managing real-time location tracking of deliveries.</li>
              <li>Developed financial report module for restaurants using Node.js, and MongoDB.</li>
            </ResponsibilitiesList>
            <TechStack>
              <Heading3>Technologies Used:</Heading3>
              <TechBadges>
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Google Maps API</Badge>
                <Badge>Twilio</Badge>
                <Badge>REST APIs</Badge>
              </TechBadges>
            </TechStack>
          </ExperienceItem>
        </ExperienceContainer>
      </ExperienceSection>
    </motion.div>
  );
};

export default Experience; 