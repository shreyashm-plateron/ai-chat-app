import { AIIcon } from '@/Assets/Icons';
import styles from './PromptArea.module.scss';
import UploadButton from '@/Components/UploadButton/UploadButton';
import { useState, useRef, useEffect } from 'react';

interface PromptAreaProps {
  value?: string;
  onChange?: (text: string) => void;
  onClick?: () => void;
  onSubmit?: (text: string) => void;
  isLoading?: boolean;
}

export default function PromptArea({
  value = '',
  onChange,
  onClick,
  onSubmit,
  isLoading = false,
}: PromptAreaProps) {
  const [inputValue, setInputValue] = useState(value);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleInput = () => {
    if (contentRef.current) {
      const newValue = contentRef.current.innerText || '';
      setInputValue(newValue);
      onChange?.(newValue);

      // Adjust height based on content
      adjustHeight();
    }
  };

  const adjustHeight = () => {
    if (contentRef.current) {
      // Reset height to auto to get natural height
      contentRef.current.style.height = 'auto';

      // Get the scroll height
      const scrollHeight = contentRef.current.scrollHeight;

      // Only increase height when content actually needs more than 24px
      if (scrollHeight <= 24) {
        contentRef.current.style.height = '24px';
      } else {
        contentRef.current.style.height = scrollHeight + 'px';
      }
    }
  };

  const handleFocus = () => {
    console.log('Content div focused');
  };

  const handleClick = () => {
    console.log('Content div clicked');
    onClick?.();
    if (contentRef.current) {
      contentRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      // Handle submit or other action
      console.log('Submit pressed');
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSubmit?.(inputValue.trim());
      setInputValue('');
      if (contentRef.current) {
        contentRef.current.innerText = '';
        adjustHeight();
      }
    }
  };

  // Update local state when value prop changes
  useEffect(() => {
    setInputValue(value);
    if (contentRef.current && value !== contentRef.current.innerText) {
      contentRef.current.innerText = value;
      // Adjust height after updating content
      setTimeout(() => adjustHeight(), 0);
    }
  }, [value]);

  // Set initial height on mount
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = '24px';
    }
  }, []);

  return (
    <div className={styles.promptAreaBox}>
      <div className={styles.inputRow}>
        <div className={styles.inputRowIcon}>
          <AIIcon />
        </div>
        <div className={styles.inputRowText}>
          <div
            ref={contentRef}
            contentEditable={true}
            onInput={handleInput}
            onFocus={handleFocus}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            className={styles.contentEditable}
            suppressContentEditableWarning={true}
            data-placeholder="Enter your prompt here"
          />
        </div>
      </div>
      <div className={styles.promptAreaFooter}>
        <UploadButton onClick={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}
