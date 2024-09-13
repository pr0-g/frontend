import { create } from "zustand";

interface UserDisplayNameState {
  displayName: string;
  setDisplayName: (nickname: string | null, name: string) => void;
}

export const useUserDisplayNameStore = create<UserDisplayNameState>((set) => ({
  displayName: "",
  setDisplayName: (nickname, name) => set({ displayName: nickname || name }),
}));
