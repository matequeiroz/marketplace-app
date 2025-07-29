import { User } from '@/models/User';

export type RegisterResponseType = {
  jwt: string;
  user: User
}