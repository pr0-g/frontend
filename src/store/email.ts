import { create } from "zustand";

interface UserDisplayEmailState {
  displayEmail: string;
  setDisplayEmail: (email: string) => void;
}

export const useUserDisplayEmailStore = create<UserDisplayEmailState>(
  (set) => ({
    displayEmail: "",
    setDisplayEmail: (email) => set({ displayEmail: email }),
  })
);
