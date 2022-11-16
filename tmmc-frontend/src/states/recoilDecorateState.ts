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

export enum FinalStage {
  NonFinal, //요소 배치단계 들어가기 전
  Placement, //요소 배치단계
  Complete, //완료
}

export interface CanvasStage {
  isCanvasStage: FinalStage;
}

const defaultCanvas: CanvasStage = {
  isCanvasStage: FinalStage.NonFinal,
};

export const recoilDecoState = atom<Decoration>({
  key: "deco",
  default: defaultDeco,
});

export const recoilCanvasStage = atom<CanvasStage>({
  key: "canvas",
  default: defaultCanvas,
});
