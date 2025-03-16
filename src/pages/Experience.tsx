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
            <Period>January 2023 – May 2024</Period>
            <Paragraph>
              Led the development of Shopify-based eCommerce websites and custom integrations for enterprise clients.
            </Paragraph>
            <ResponsibilitiesList>
              <li>Led the development of Shopify-based eCommerce websites, including the successful launch of BDS Suspension, driving significant brand growth.</li>
              <li>Developed a custom Akeneo-Shopify integration module in Node.js to import dynamic product data such as pricing and variants, enabling enterprise clients to manage thousands of unique products.</li>
              <li>Built auxiliary applications using React and Node.js, including a social media gallery showcasing customer builds.</li>
              <li>Enhanced legacy PHP systems and contributed to C# backends on Azure, supporting mobile developers in connecting Flutter apps to authentication and data endpoints.</li>
              <li>Managed various Azure resources including AD B2C Auth, Function Apps, Blob/File Storage, and SQL database.</li>
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
            <Paragraph>
              Modernized large-scale data processing applications and built secure APIs for financial aid processing.
            </Paragraph>
            <ResponsibilitiesList>
              <li>Reconstructed and modernized large-scale data processing applications using Node.js, centralizing student financial aid data across multiple college networks.</li>
              <li>Developed an information module to connect to various college systems, ingesting data into Navient's central database for seamless financial aid processing.</li>
              <li>Built a secure API module providing colleges with real-time access to financial aid records and updates.</li>
              <li>Assisted in frontend development using React and TypeScript with Redux, enhancing the user interface for college administrators.</li>
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
            <Paragraph>
              Designed and implemented the college student portal for account access and management.
            </Paragraph>
            <ResponsibilitiesList>
              <li>Designed and implemented the college student portal for account access, class enrollment, financial aid applications, and coursework management.</li>
              <li>Developed backend services using Spring Boot, Hibernate, and JPA, handling student records and academic transcripts efficiently.</li>
              <li>Created HTTP requests in Angular to fetch data and update the user interface dynamically.</li>
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
            <Paragraph>
              Enhanced monitoring systems and integrated third-party API services for food ordering platforms.
            </Paragraph>
            <ResponsibilitiesList>
              <li>Enhanced Google Food Ordering graphical monitoring systems using the Google Visualization framework.</li>
              <li>Integrated third-party API services, including Twilio 2FA, 7-Eleven food ordering services, and Slaask automated customer support.</li>
              <li>Developed financial reporting tables for restaurants and users, improving data visualization and business insights.</li>
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