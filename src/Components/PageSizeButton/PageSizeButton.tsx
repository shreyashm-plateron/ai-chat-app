import styles from './PageSizeButton.module.scss';
import CrossPaddedIcon from '@/Assets/Icons/CrossPadded';
import { ReactNode } from 'react';

interface PageSizeButtonProps {
  icon?: ReactNode;
  onClick?: () => void;
}

export default function PageSizeButton({ icon, onClick }: PageSizeButtonProps) {
  return (
    <div className={styles.pageSizeButton} onClick={onClick}>
      <div className={styles.pageSizeButtonIcon}>
        {icon || <CrossPaddedIcon width={16} height={16} />}
      </div>
    </div>
  );
}
