export interface VoiceInfo {
  ownerName: string;
  message: Array<Voice>;
}

export interface Voice {
  writer: string;
  comment: string;
  personalVoice: string;
  objectUrl: string;
}
