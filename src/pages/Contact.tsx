import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SectionContainer, Heading1, Paragraph, Button } from '../styles/MainStyles';

const ContactSection = styled(SectionContainer)`
  padding-top: ${props => props.theme.spacing['3xl']};
  padding-bottom: ${props => props.theme.spacing['3xl']};
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.lightBackground};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.boxShadow.md};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
`;

const Label = styled.label`
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  padding: ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  padding: ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.md};
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled(Button)`
  margin-top: ${props => props.theme.spacing.sm};
  align-self: flex-start;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 50%;
  font-size: ${props => props.theme.fontSizes.lg};
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightText};
`;

const ContactValue = styled.a`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ContactValueText = styled.span`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.text};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.md};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 50%;
  font-size: ${props => props.theme.fontSizes.lg};
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const SuccessMessage = styled.div`
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.success};
  color: white;
  border-radius: ${props => props.theme.borderRadius.md};
  margin-top: ${props => props.theme.spacing.md};
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactSection>
        <Heading1>Contact Me</Heading1>
        <Paragraph>
          I'm always open to discussing new projects, opportunities, or partnerships. 
          Feel free to reach out to me using the contact form or through any of the channels below.
        </Paragraph>
        
        <ContactContainer>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <ContactLabel>Email</ContactLabel>
                <ContactValue href="mailto:dmitrinuzhny@outlook.com">dmitrinuzhny@outlook.com</ContactValue>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue href="tel:+18454996018">(845) 499-6018</ContactValue>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                <ContactLabel>Location</ContactLabel>
                <ContactValueText>New York, NY</ContactValueText>
              </ContactText>
            </ContactItem>
            
            <div>
              <Paragraph>Connect with me on social media:</Paragraph>
              <SocialLinks>
                <SocialLink href="https://github.com/dmitrinuzhny" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/dmitrinuzhny" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialLink>
              </SocialLinks>
            </div>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <SubmitButton type="submit">Send Message</SubmitButton>
            
            {isSubmitted && (
              <SuccessMessage>
                Thank you for your message! I'll get back to you as soon as possible.
              </SuccessMessage>
            )}
          </ContactForm>
        </ContactContainer>
      </ContactSection>
    </motion.div>
  );
};

export default Contact; 