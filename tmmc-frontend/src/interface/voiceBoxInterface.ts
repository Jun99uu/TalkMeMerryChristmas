export interface VoiceInfo {
  name: string;
  messages: Array<Voice>;
}

export interface Voice {
  messageId: number;
  writer: string;
  comment: string;
  personalVoice: string;
  Objet: Objet;
}

export interface Objet {
  objetId: number;
  objetUrl: string;
}
