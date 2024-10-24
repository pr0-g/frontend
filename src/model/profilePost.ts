export interface IProfilePost {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  likeCount: number;
  content?: string;
  commentCount?: number;
}
