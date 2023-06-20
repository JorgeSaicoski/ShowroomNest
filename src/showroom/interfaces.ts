import { Project } from '../projects/projects.interface';

export interface Showroom {
  name: string;
  description?: string;
  client?: string;
  images?: string[];
  projects: Project[];
}