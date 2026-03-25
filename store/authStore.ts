import { create } from "zustand";


interface AuthState {
    userID: string;
    setUserID: (userID: string) => void;
    email: string;
    setEmail: (email: string) => void;
    userName: string;
    setUserName: (userName: string) => void;
    avatar: string;
    setAvatar: (avatar: string) => void;


}

export const useAuthStore = create<AuthState>((set) => ({
    userID: "",
    setUserID: (userID: string) => set({ userID }),
    email: "",
    setEmail: (email: string) => set({ email }),
    userName: "",
    setUserName: (userName: string) => set({ userName }),
    avatar: "",
    setAvatar: (avatar: string) => set({ avatar }),
}));