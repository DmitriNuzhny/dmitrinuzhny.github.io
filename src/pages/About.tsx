import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionContainer, Heading1, Heading2, Heading3, Paragraph, Badge } from '../styles/MainStyles';

const AboutSection = styled(SectionContainer)`
  padding-top: ${props => props.theme.spacing['3xl']};
  padding-bottom: ${props => props.theme.spacing['3xl']};
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
`;

const SkillsContainer = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
`;

const SkillCategory = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.md};
`;

const EducationContainer = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
`;

const EducationItem = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Degree = styled.h4`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.text};
`;

const School = styled.div`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.primary};
`;

const Period = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightText};
`;

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutSection>
        <Heading1>About Me</Heading1>
        <AboutContent>
          <div>
            <Paragraph>
              I'm a seasoned Full-stack Software Engineer with over 6 years of experience delivering scalable, 
              high-performance applications across eCommerce, education, and logistics industries. I specialize 
              in building dynamic solutions, API integrations, and modernizing legacy systems for enterprise clients.
            </Paragraph>
            <Paragraph>
              My journey in software development began with a strong foundation in Computer Science from CUNY Brooklyn College. 
              Since then, I've worked with various technologies and platforms, continuously expanding my skill set to stay 
              at the forefront of the industry.
            </Paragraph>
            <Paragraph>
              I'm passionate about creating efficient, user-friendly applications that solve real-world problems. 
              Whether it's developing custom Shopify integrations, building data processing systems, or creating 
              student portals, I approach each project with dedication and attention to detail.
            </Paragraph>
          </div>

          <div>
            <Heading2>Technical Skills</Heading2>
            <SkillsContainer>
              <SkillCategory>
                <Heading3>Frontend</Heading3>
                <SkillsGrid>
                  <Badge>React</Badge>
                  <Badge>Redux</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Angular</Badge>
                </SkillsGrid>
              </SkillCategory>

              <SkillCategory>
                <Heading3>Backend</Heading3>
                <SkillsGrid>
                  <Badge>Node.js</Badge>
                  <Badge>PHP</Badge>
                  <Badge>Java (Spring Boot)</Badge>
                  <Badge>Python (Django)</Badge>
                  <Badge>C#</Badge>
                </SkillsGrid>
              </SkillCategory>

              <SkillCategory>
                <Heading3>eCommerce Platforms</Heading3>
                <SkillsGrid>
                  <Badge>Shopify (Liquid)</Badge>
                  <Badge>Akeneo</Badge>
                </SkillsGrid>
              </SkillCategory>

              <SkillCategory>
                <Heading3>Cloud Platforms</Heading3>
                <SkillsGrid>
                  <Badge>Azure</Badge>
                  <Badge>AWS</Badge>
                  <Badge>GCP</Badge>
                  <Badge>Cloudflare</Badge>
                </SkillsGrid>
              </SkillCategory>

              <SkillCategory>
                <Heading3>Databases</Heading3>
                <SkillsGrid>
                  <Badge>MySQL</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>MSSQL</Badge>
                </SkillsGrid>
              </SkillCategory>

              <SkillCategory>
                <Heading3>Tools & Technologies</Heading3>
                <SkillsGrid>
                  <Badge>Git</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Kubernetes</Badge>
                  <Badge>Selenium</Badge>
                  <Badge>TensorFlow</Badge>
                </SkillsGrid>
              </SkillCategory>
            </SkillsContainer>
          </div>

          <div>
            <Heading2>Education</Heading2>
            <EducationContainer>
              <EducationItem>
                <Degree>Bachelor of Science (BS) in Computer Science</Degree>
                <School>CUNY Brooklyn College</School>
                <Period>August 2017 – May 2020</Period>
              </EducationItem>
            </EducationContainer>
          </div>
        </AboutContent>
      </AboutSection>
    </motion.div>
  );
};

export default About; 