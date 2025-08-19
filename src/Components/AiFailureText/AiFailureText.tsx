import styles from './AiFailure.module.scss';
import AiIconWhite from '@/Assets/Icons/AiIconWhite';
import RetryIcon from '@/Assets/Icons/Retry';

export default function AiFailureText() {
  return (
    <div className={styles.aiFailureContainer}>
      <div className={styles.aiFailureIcon}>
        <AiIconWhite />
      </div>
      <div className={styles.aiFailureMessage}>
        <div className={styles.aiFailureText}>
          Oops looks like something might’ve gone wrong. Let’s give it another
          shot.
        </div>
        <div className={styles.aiFailureRegenerateButton}>
          <div className={styles.aiFailureRegenerateButtonIcon}>
            <RetryIcon />
          </div>
          <div className={styles.aiFailureRegenerateButtonText}>
            Regenerate response
          </div>
        </div>
      </div>
    </div>
  );
}
