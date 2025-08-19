import styles from './ChatButton.module.scss';
import { AIIcon } from '@/Assets/Icons';

export default function ChatButton() {
  return (
    <div className={styles.chatButton}>
      <AIIcon width={24} height={24} />
      <div className={styles.chatButtonText}>
        {' '}
        Hey, how can I
        <span className={styles.chatButtonTextSpan}> assist you today?</span>
      </div>
    </div>
  );
}
