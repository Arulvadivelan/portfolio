import { Project } from '../../models/projects-model';

export const projects: Project[] = [
  {
    name: 'Vehicle Parking System',
    type: 'Full Stack Application',
    context: 'Online Degree Project',
    technologies: ['Flask', 'Vue', 'SQLite', 'Redis', 'Celery'],
    description:
      'A full-stack vehicle parking management application for managing parking lots, parking spots, users and reservations.',
    highlights: [
      'Role-based authentication',
      'Parking management',
      'Reservation workflows',
      'Redis caching',
      'Background task processing',
    ],
  },

  {
    name: 'Smart MCQ Solver',
    type: 'AI / NLP',
    context: 'Online Degree Project',
    technologies: [
      'Python',
      'PyTorch',
      'Transformers',
      'Sentence Transformers',
    ],
    description:
      'An AI-based system for ranking multiple-choice options using semantic similarity and transformer-based approaches.',
    highlights: [
      'Semantic similarity',
      'Transformer-based embeddings',
      'Multiple-choice answer ranking',
      'MAP@3 evaluation'
    ]
  },

  {
    name: 'Final Year Project',
    type: 'Machine Learning',
    context: 'Undergraduate Final Year Project',
    technologies: ['Python', 'Machine Learning'],
    description:
      'A machine learning project developed as part of my undergraduate final-year project.',
    highlights: [
      'Data preprocessing',
      'Machine learning model development',
      'Model evaluation'
    ]
  },
];
