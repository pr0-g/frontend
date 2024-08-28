import { create } from "zustand";

interface PostIdState {
  activePostId: number;
  setActivePostId: (index: number) => void;
}

export const usePostIdStore = create<PostIdState>((set) => ({
  activePostId: 0,
  setActivePostId: (index) => set({ activePostId: index }),
}));
