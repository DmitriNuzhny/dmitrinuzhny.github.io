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
            <JobTitle>Senior Shopify Developer</JobTitle>
            <Company>DentalMarketPlace</Company>
            <Period>October 2024 – Present</Period>
            <ResponsibilitiesList>
              <li>Developed and optimized a Shopify-based dental product platform, increasing user engagement by improving UI responsiveness.</li>
              <li>Developed Shopify public and custom apps using Node.js, React, and PHP.</li>
              <li>Managed theme development in Liquid, JavaScript, and HTML/CSS, enhancing speed and accessibility.</li>
              <li>Designed warehouse-based shipping logic that reduced delivery times by 20%.</li>
              <li>Oversaw product inventory and SEO enhancements, supporting 500+ SKUs.</li>
              <li>Coordinated feature implementation and bug fixes with cross-functional teams.</li>
            </ResponsibilitiesList>
            <TechStack>
              <Heading3>Technologies Used:</Heading3>
              <TechBadges>
                <Badge>Shopify</Badge>
                <Badge>Liquid</Badge>
                <Badge>HTML/CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>SEO</Badge>
              </TechBadges>
            </TechStack>
          </ExperienceItem>

          <ExperienceItem>
            <JobTitle>Senior Software Engineer</JobTitle>
            <Company>Fox Factory</Company>
            <Period>January 2023 – May 2024</Period>
            <ResponsibilitiesList>
              <li>Launched BDS Suspension Shopify store, contributing to 35% growth in online revenue.</li>
              <li>Engineered Akeneo-Shopify data sync module in Node.js to support over 3,000 dynamic SKUs.</li>
              <li>Built React + Node.js applications including a customer showcase gallery.</li>
              <li>Supported legacy backend systems in PHP and C#; integrated with Azure services(AD B2C, Function Apps, SQL).</li>
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
              </TechBadges>
            </TechStack>
          </ExperienceItem>

          <ExperienceItem>
            <JobTitle>Full-Stack Software Engineer</JobTitle>
            <Company>Navient</Company>
            <Period>August 2020 – December 2022</Period>
            <ResponsibilitiesList>
              <li>Modernized financial aid processing tools for college networks using Node.js and React.</li>
              <li>Built centralized data ingestion systems, improving data pipeline efficiency by 40%.</li>
              <li>Created secure RESTful APIs for financial aid record access.</li>
              <li>Enhanced Redux-powered admin portals for university partners.</li>
            </ResponsibilitiesList>
            <TechStack>
              <Heading3>Technologies Used:</Heading3>
              <TechBadges>
                <Badge>Node.js</Badge>
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Redux</Badge>
                <Badge>SQL</Badge>
                <Badge>REST APIs</Badge>
              </TechBadges>
            </TechStack>
          </ExperienceItem>

          <ExperienceItem>
            <JobTitle>Angular / Spring Boot Engineer</JobTitle>
            <Company>Santa Fe College</Company>
            <Period>May 2019 – August 2020</Period>
            <ResponsibilitiesList>
              <li>Built a student portal with real-time class registration and document management.</li>
              <li>Developed REST APIs and student record systems using Java Spring Boot and Hibernate.</li>
              <li>Integrated Angular frontend with dynamic HTTP endpoints.</li>
            </ResponsibilitiesList>
            <TechStack>
              <Heading3>Technologies Used:</Heading3>
              <TechBadges>
                <Badge>Angular</Badge>
                <Badge>Spring Boot</Badge>
                <Badge>Java</Badge>
                <Badge>Hibernate</Badge>
                <Badge>JPA</Badge>
                <Badge>SQL</Badge>
              </TechBadges>
            </TechStack>
          </ExperienceItem>

          <ExperienceItem>
            <JobTitle>Senior PHP Developer</JobTitle>
            <Company>DeliverLogic</Company>
            <Period>June 2018 – February 2019</Period>
            <ResponsibilitiesList>
              <li>Created visual dashboards for food delivery systems using Google Charts.</li>
              <li>Integrated Twilio 2FA, Slack support bots, and 7-Eleven ordering services.</li>
              <li>Developed analytics dashboards and financial tables for restaurant partners.</li>
            </ResponsibilitiesList>
            <TechStack>
              <Heading3>Technologies Used:</Heading3>
              <TechBadges>
                <Badge>PHP</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Google Visualization</Badge>
                <Badge>REST APIs</Badge>
                <Badge>MySQL</Badge>
              </TechBadges>
            </TechStack>
          </ExperienceItem>
        </ExperienceContainer>
      </ExperienceSection>
    </motion.div>
  );
};

export default Experience; 