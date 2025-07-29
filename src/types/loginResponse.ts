import { User } from '@/models/User';

export type LoginResponseType = {
  jwt: string;
  user: User
}