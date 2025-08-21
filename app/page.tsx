'use client';

import { useState } from 'react';
import styles from './global.module.scss';
import AiChatbotSmallPrompt from '@/Components/AiChatbotSmallPrompt/AiChatbotSmallPrompt';
import PromptModal from '../src/Modules/PromptModal/PromptModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const authToken = localStorage.getItem('token');

  if(!authToken) {
    return <></>
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      {!isModalOpen && <AiChatbotSmallPrompt onClick={handleOpenModal} />}
      {isModalOpen && <PromptModal onClose={handleCloseModal} />}
     
    </div>
  );
}
