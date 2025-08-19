'use client';

import { LottieAnimation } from '../Animations';
import aiChatbotSmallPromptAnimation from '../../Assets/Animations/AI chatbot small prompt.json';
import styles from './AiChatbotSmallPrompt.module.scss';

interface AiChatbotSmallPromptProps {
  onClick?: () => void;
}

export default function AiChatbotSmallPrompt({
  onClick,
}: AiChatbotSmallPromptProps) {
  return (
    <div className={styles.aiChatbotSmallPrompt} onClick={onClick}>
      <div className={styles.animationBox}>
        <LottieAnimation animationData={aiChatbotSmallPromptAnimation} />
      </div>
    </div>
  );
}
