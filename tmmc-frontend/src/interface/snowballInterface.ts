export interface SnowballInterface {
  name: string;
  cnt: number;
  objectList: Array<Object>;
}

export interface Object {
  writer: string;
  objectUrl: string;
  top: number;
  left: number;
}
