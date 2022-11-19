export interface SnowballInterface {
  name: string;
  messages: Array<Object>;
}

export interface Object {
  writer: string;
  Objet: ObjectInfo;
  top: number;
  left: number;
}

export interface ObjectInfo {
  objetId: number;
  objetUrl: string;
}
