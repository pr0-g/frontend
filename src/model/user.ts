import { IInterest } from "./interest";

export interface IUserInfo {
  userId: number;
  email: string;
  name: string;
  nickname?: string;
  provider: string;
  interests: IInterest[];
}
