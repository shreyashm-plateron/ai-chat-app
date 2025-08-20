import styles from './PromptedText.module.scss';

interface PromptedTextProps {
  text: string;
}

export default function PromptedText({ text }: PromptedTextProps) {
  return (
    <div className={styles.promptedTextContainer}>
      <div className={styles.promptedTextContent}>{text}</div>
    </div>
  );
}
