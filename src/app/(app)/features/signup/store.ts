import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { SignupSchema } from "./schema";

type SignupState = Partial<SignupSchema> & {
  hasHydrated: boolean;
  setData: (data: Partial<SignupSchema>) => void;
  setHasHydrated: (value: boolean) => void;
};

export const useSignupStore = create<SignupState>()(
  persist(
    (set) => ({
      setData: (data) => set(data),
      hasHydrated: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "wallet-signup-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
