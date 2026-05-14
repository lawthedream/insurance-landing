export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  category: string;
  amount: string;
  image: string;
}

export interface ServiceTab {
  id: string;
  label: string;
  title: string;
  content: string;
  tags: string[];
  image: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}