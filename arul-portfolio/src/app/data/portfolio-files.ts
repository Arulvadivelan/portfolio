import { PortfolioFile } from "../models/portfolio-file";

export const portfolioFiles: PortfolioFile[] = [
    {
        name: 'README.md',
        type: 'markdown',
        section: 'about',
        content: [
            '# Hi, I\'m Arul 👋',
            '',
            'I\'m a [Software Developer / ML Engineer].',
            '',
            'I enjoy building applications, solving problems,',
            'and exploring machine learning and modern web technologies.',
            '',
            '## About Me',
            '',
            '- 🎓 Education: [Your degree]',
            '- 💼 Experience: [Your experience]',
            '- 📍 Location: [Your location]',
            '- 🌐 Portfolio: [Your website]',
            '',
            '## What I Work With',
            '',
            '- Programming: [Python, TypeScript, ...]',
            '- Web: [Angular, ...]',
            '- Machine Learning: [scikit-learn, PyTorch, ...]',
            '- Tools: [Git, GitHub, ...]',
            '',
            '## Featured Projects',
            '',
            'Explore the projects section to see what I have built.',
            '',
            '## Connect',
            '',
            '- GitHub: [Your GitHub]',
            '- LinkedIn: [Your LinkedIn]',
            '- Email: [Your Email]'
        ]
    },

  {
    name: 'about.ts',
    type: 'typescript',
    section: 'about',
    content: [
      'const about = {',
      '  name: "Arul",',
      '  role: "Software Developer",',
      '};'
    ]
  },

  {
    name: 'skills.json',
    type: 'json',
    section: 'skills',
    content: [
      '{',
      '  "languages": ["Python", "TypeScript"],',
      '  "frameworks": ["Angular"],',
      '}'
    ]
  },

  {
    name: 'projects.ts',
    type: 'typescript',
    section: 'projects',
    content: [
      'const projects = [',
      '  // Projects will be added here',
      '];'
    ]
  },

  {
    name: 'experience.ts',
    type: 'typescript',
    section: 'projects',
    content: [
      'const experience = [',
      '  // Experience will be added here',
      '];'
    ]
  },

  {
    name: 'education.md',
    type: 'markdown',
    section: 'about',
    content: [
      '# Education',
      '',
      'Education details will be added here.'
    ]
  },

  {
    name: 'certifications.md',
    type: 'markdown',
    section: 'skills',
    content: [
      '# Certifications',
      '',
      'Certifications will be added here.'
    ]
  },

  {
    name: 'contact.ts',
    type: 'typescript',
    section: 'contact',
    content: [
      'const contact = {',
      '  email: "your-email@example.com",',
      '};'
    ]
  }

];