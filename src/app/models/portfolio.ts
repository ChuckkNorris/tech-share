import { User } from './user';
export interface PortfolioItem {
    id?: number;
    title?: string;
    description?: string;
    thumbnailUrl?: string;
    author?: User;
}