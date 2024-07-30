"use client";

import { ContactButtonProps } from "../props/contactButtonProps";
import apiService from "../services/apiService";
import useLoginModal from "../hooks/useLoginModal";
import { useRouter } from "next/navigation";

const ContactButton: React.FC<ContactButtonProps> = ({
  userId,
  landlordId,
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const startConversation = async () => {
    if (userId) {
      const conversation = await apiService.get(`/api/chat/start/${landlordId}/`);

      if (conversation.conversation_id) {
        router.push(`/inbox/${conversation.conversation_id}`);
      }
    } else {
      loginModal.open();
    }
  }

  return(
    <div
      onClick={startConversation}
      className="mt-6 py-3 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnb-dark transition duration-200 cursor-pointer"
    >
      Contact
    </div>
  )
}

export default ContactButton;