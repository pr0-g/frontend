export interface IPost {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  updatedAt: string | null;
  interestId: number;
  userId: number;
  likeCount: number;
  writerId: string;
}
