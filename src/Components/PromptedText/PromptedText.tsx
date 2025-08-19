import styles from './PromptedText.module.scss';

interface PromptedTextProps {
  text: string;
  error?: boolean;
}

export default function PromptedText({
  text,
  error = false,
}: PromptedTextProps) {
  return (
    <div
      className={`${styles.promptedTextContainer} ${error ? styles.error : ''}`}
    >
      <div className={styles.promptedTextContent}>{text}</div>
    </div>
  );
}
