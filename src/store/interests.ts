import { create } from "zustand";

interface Interest {
  id: number;
  name: string;
}

interface InterestsStore {
  interests: Interest[];
  setInterests: (interests: Interest[]) => void;
}

export const useInterestsStore = create<InterestsStore>((set) => ({
  interests: [],
  setInterests: (interests) => set({ interests }),
}));
