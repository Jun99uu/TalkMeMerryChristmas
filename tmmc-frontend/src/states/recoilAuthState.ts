import { atom } from "recoil";

export enum AuthState {
  Auth,
  NoAuth,
}

export const recoilAuthState = atom<AuthState>({
  key: "auth",
  default: AuthState.NoAuth,
});
