import { ConversationType } from "../types/conversationType";
import { MessageType } from "../types/messageType";

export interface ConversationDetailProps {
  conversation: ConversationType;
  userId: string;
  token: string;
  messages: MessageType[];
}