import { PortfolioFile } from '../models/portfolio-file';
import { aboutContent } from './portfolio-contents/about';
import { certificationsContent } from './portfolio-contents/certification';
import { contactContent } from './portfolio-contents/contact';
import { educationContent } from './portfolio-contents/education';
import { experienceContent } from './portfolio-contents/experience';
import { projectsContent } from './portfolio-contents/project';
import { readmeContent } from './portfolio-contents/readme';
import { skillsContent } from './portfolio-contents/skills';

export const portfolioFiles: PortfolioFile[] = [
  {
    name: 'README.md',
    type: 'markdown',
    section: 'about',
    content: readmeContent
  },

  {
    name: 'about.ts',
    type: 'typescript',
    section: 'about',
    content: aboutContent
  },

  {
    name: 'education.md',
    type: 'markdown',
    section: 'about',
    content: educationContent
  },

  {
    name: 'projects.ts',
    type: 'typescript',
    section: 'projects',
    content: projectsContent
  },

  {
    name: 'experience.ts',
    type: 'typescript',
    section: 'projects',
    content: experienceContent
  },

  {
    name: 'skills.json',
    type: 'json',
    section: 'skills',
    content: skillsContent
  },

  {
    name: 'certifications.md',
    type: 'markdown',
    section: 'skills',
    content: certificationsContent
  },

  {
    name: 'contact.ts',
    type: 'typescript',
    section: 'contact',
    content: contactContent
  }
];
