export type User = {
  id: string | number;
  name: string;
  avatar: string;
};

export interface Message {
  id?: string;
  value?: string;
  avatar?: string;
}
