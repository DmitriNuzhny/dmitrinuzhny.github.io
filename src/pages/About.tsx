import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionContainer, Heading1, Heading2, Heading3, Paragraph, Badge } from '../styles/MainStyles.ts';
import profileImage from '../assets/images/dmitri_profile.jpg';

const AboutSection = styled(SectionContainer)`
  padding-top: ${props => props.theme.spacing['3xl']};
  padding-bottom: ${props => props.theme.spacing['3xl']};
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    gap: ${props => props.theme.spacing.xl};
  }
`;

const ProfileImageContainer = styled.div`
  width: 250px;
  height: 300px;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.boxShadow.md};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 0;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileContent = styled.div`
  flex: 1;
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
        
        <ProfileSection>
          <ProfileImageContainer>
            <ProfileImage src={profileImage} alt="Dmitri Nuzhny" />
          </ProfileImageContainer>
          
          <ProfileContent>
            <Paragraph>
              I'm a seasoned Full-stack Software Engineer with over 7 years of experience delivering scalable, 
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
          </ProfileContent>
        </ProfileSection>
        
        <AboutContent>
          <div>
            <Heading2>Technical Skills</Heading2>
            <SkillsContainer>
              <SkillCategory>
                <Heading3>Languages</Heading3>
                <SkillsGrid>
                  <Badge>JavaScript (ES6+)</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Java</Badge>
                  <Badge>PHP</Badge>
                  <Badge>HTML/CSS</Badge>
                  <Badge>Liquid</Badge>
                </SkillsGrid>
              </SkillCategory>

              <SkillCategory>
                <Heading3>Frameworks & Libraries</Heading3>
                <SkillsGrid>
                  <Badge>React</Badge>
                  <Badge>React Native</Badge>
                  <Badge>Redux</Badge>
                  <Badge>Node/Express</Badge>
                  <Badge>Spring Boot</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Webpack</Badge>
                  <Badge>Babel</Badge>
                  <Badge>GraphQL</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>Symfony</Badge>
                  <Badge>Laravel</Badge>
                  <Badge>WordPress</Badge>
                  <Badge>Composer</Badge>
                </SkillsGrid>
              </SkillCategory>

              <SkillCategory>
                <Heading3>eCommerce Platforms</Heading3>
                <SkillsGrid>
                  <Badge>Shopify</Badge>
                  <Badge>WordPress</Badge>
                  <Badge>Akeneo</Badge>
                </SkillsGrid>
              </SkillCategory>

              <SkillCategory>
                <Heading3>Mobile Development</Heading3>
                <SkillsGrid>
                  <Badge>React Native</Badge>
                  <Badge>Expo</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>iOS</Badge>
                  <Badge>Android</Badge>
                  <Badge>Cross-platform</Badge>
                </SkillsGrid>
              </SkillCategory>

              <SkillCategory>
                <Heading3>Databases & Servers</Heading3>
                <SkillsGrid>
                  <Badge>SQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Git/Github</Badge>
                  <Badge>AWS (S3/EC2/Lambda)</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Azure</Badge>
                  <Badge>GCP</Badge>
                  <Badge>Linux</Badge>
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