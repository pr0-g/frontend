export interface IPostDetail {
  id: number;
  title: string;
  content: string;
  writerId: number;
  writerNickname: string;
  createdAt: string;
  updatedAt: string;
  interest: {
    id: number;
    name: string;
  };
  likeCount: number;
  thumbnailUrl: string;
  userLiked: boolean;
}
