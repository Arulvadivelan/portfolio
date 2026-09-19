export interface PortfolioFile {
  name: string;
  type: 'markdown' | 'typescript' | 'json';
  section: 'about' | 'projects' | 'skills' | 'contact';
  content: string[];
}