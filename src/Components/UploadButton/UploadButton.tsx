import styles from './UploadButton.module.scss';
import UploadIcon from '@/Assets/Icons/DirectionArrowUp';
import PromptRunning from '@/Assets/Icons/PromptRunning';

interface UploadButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
}

export default function UploadButton({
  onClick,
  isLoading = false,
}: UploadButtonProps) {
  const handleClick = () => {
    if (!isLoading && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`${styles.uploadButton} ${isLoading ? styles.loading : ''}`}
      onClick={handleClick}
    >
      <div className={styles.uploadButtonIcon}>
        {isLoading ? (
          <PromptRunning width={16} height={16} />
        ) : (
          <UploadIcon width={16} height={16} />
        )}
      </div>
    </div>
  );
}
