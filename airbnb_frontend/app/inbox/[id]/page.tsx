import ConversationDetail from "@/app/components/inbox/ConversationDetail";
import { getUserId } from "@/app/lib/actions";
import { useState, useEffect } from "react";
import apiService from "@/app/services/apiService";
import { getAccessToken } from "@/app/lib/actions";

const ConversationPage = async ({params}: {params: {id: string}}) => {
  const userId = await getUserId();
  const token = await getAccessToken();

  if (!userId || !token) {
    return (
      <main className="max-w-[2000px] max-auto px-6 py-12">
        <p>You need to be authenticated</p>
      </main>
    );
  }

  const conversation = await apiService.get(`/api/chat/${params.id}/`);

  return (
      <main className="max-w-[2000px] mx-auto px-6 pb-6">
        <ConversationDetail
          userId={userId}
          token={token}
          conversation={conversation.conversation}
          messages={conversation?.messages}
        />
      </main>
    );
  };

export default ConversationPage;