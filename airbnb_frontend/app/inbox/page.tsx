import Conversation from "../components/inbox/Conversation";
import apiService from "../services/apiService";
import { useState, useEffect } from "react";
import { getUserId } from "../lib/actions";
import { ConversationType } from "../types/conversationType";

const InboxPage = async () => {
  const userId = await getUserId();

  if (!userId) {
    return (
      <main className="max-w-[2000px] max-auto px-6 py-12">
        <p>You need to be authenticated</p>
      </main>
    );
  }

  const conversations = await apiService.get("/api/chat/");
  console.log(conversations);

  return (
    <main className="max-w-[2000px] mx-auto px-6 pb-6 space-y-4">
      <h1 className="my-6 text-2xl">Inbox</h1>
        {conversations.map((conversation: ConversationType) => {
          return (
            <Conversation
              key={conversation.id}
              userId={userId}
              conversation={conversation}
            />
          )
        })}
    </main>
  );
}

export default InboxPage;