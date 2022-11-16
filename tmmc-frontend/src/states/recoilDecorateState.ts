import { atom } from "recoil";

export interface Decoration {
  name: string;
  comment: string;
  objectId: number;
  commonVoice: File | null;
  personalVoice: File | null;
}

const defaultDeco: Decoration = {
  name: "",
  comment: "",
  objectId: 0,
  commonVoice: null,
  personalVoice: null,
};

export const recoilDecoState = atom<Decoration>({
  key: "deco",
  default: defaultDeco,
});
