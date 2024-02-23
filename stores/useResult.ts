import { create } from "zustand";
import { UserType } from "@/types/userType";

interface UseResult {
  user: UserType;
  setUser: (user: UserType) => void;
  isNotFound: boolean;
  setNotFound: (isNotFound: boolean) => void;
}

const useResult = create<UseResult>((set) => ({
  user: {} as UserType,
  setUser: (user) => set({ user }),
  isNotFound: false,
  setNotFound: (isNotFound) => set({ isNotFound }),
}));

export default useResult;
