import { ConversationType } from "../types/conversationType";

export interface ConversationDetailProps {
  conversation: ConversationType;
  userId: string;
  token: string;
}