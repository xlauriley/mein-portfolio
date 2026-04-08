export interface Project {
  id: string;
  title: string;
  category: 'web' | 'logo' | 'print' | 'game';
  icon?: string;
  images: string[];
  description: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
}
