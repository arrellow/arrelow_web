import { create } from "zustand";

interface AuthState {
  signedIn: boolean;
  signIn: any;
  signOut: any;
}

const useAuthStore = create<AuthState>((set) => ({
  signedIn: false,
  signIn: () => set(() => ({ signedIn: true })),
  signOut: () => set(() => ({ signedIn: false })),
}));

export default useAuthStore;
