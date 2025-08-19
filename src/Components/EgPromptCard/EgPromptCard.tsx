import styles from './EgPromptCard.module.scss';
import AIPrompt from '@/Assets/Icons/AIPrompt';

interface EgPromptCardProps {
  text: string;
  onClick: () => void;
}

export default function EgPromptCard({ text, onClick }: EgPromptCardProps) {
  return (
    <div className={styles.egPromptCard} onClick={onClick}>
      <div className={styles.egPromptCardContent}>{text}</div>
      <div className={styles.egPromptCardFooter}>
        <div className={styles.egPromptCardFooterButton}>
          <AIPrompt width={15} height={15} />
        </div>
      </div>
    </div>
  );
}
