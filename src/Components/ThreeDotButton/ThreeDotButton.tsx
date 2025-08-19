'use client';

import { useState, useRef, useEffect } from 'react';
import ThreeDotIcon from '@/Assets/Icons/HoriThreeDots';
import EditIcon from '@/Assets/Icons/Edit';
import DeleteIcon from '@/Assets/Icons/Delete';
import styles from './ThreeDotButton.module.scss';

export default function ThreeDotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleRename = () => {
    console.log('Rename clicked');
    setIsOpen(false);
  };

  const handleDelete = () => {
    console.log('Delete clicked');
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.threeDotButton} onClick={handleButtonClick}>
        <div className={styles.threeDotButtonIcon}>
          <ThreeDotIcon />
        </div>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem} onClick={handleRename}>
            <EditIcon className={styles.dropdownIcon} />
            <span>Rename</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.dropdownItem} onClick={handleDelete}>
            <DeleteIcon className={styles.dropdownIcon} />
            <span>Delete</span>
          </div>
        </div>
      )}
    </div>
  );
}
