export enum MessageType {
  User = 'user',
  Bot = 'bot'
}

export interface Message {
  type: MessageType;
  content: string;
  timestamp: Date;
}