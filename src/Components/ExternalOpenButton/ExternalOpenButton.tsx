'use client';

import styles from './ExternalOpenButton.module.scss';
import ExternalOpenIcon from '@/Assets/Icons/ExternalOpen';
import { useState } from 'react';

export default function ExternalOpenButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.externalOpenButton} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.externalOpenButtonIcon}>
        <ExternalOpenIcon width={16} height={16} />
      </div>
      {isHovered && (
        <div className={styles.externalOpenButtonText}>Open in new tab</div>
      )}
    </div>
  );
}
