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
  const [showEllipsis, setShowEllipsis] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleInput = () => {
    if (contentRef.current) {
      const newValue = contentRef.current.innerText || '';
      setInputValue(newValue);
      onChange?.(newValue);

      // Only adjust height if we haven't reached the maximum
      if (!isOverflowing) {
        adjustHeight();
      }
    }
  };

  const adjustHeight = () => {
    if (contentRef.current) {
      // Get the scroll height
      const scrollHeight = contentRef.current.scrollHeight;
      const maxHeight = 250; // Fixed height in pixels

      // Check if content is overflowing
      if (scrollHeight > maxHeight) {
        setIsOverflowing(true);
        // Force the height to maxHeight and make it scrollable
        contentRef.current.style.height = maxHeight + 'px';
        contentRef.current.style.maxHeight = maxHeight + 'px';
        contentRef.current.style.overflow = 'auto';
        contentRef.current.style.resize = 'none';

        // Show ellipsis after a short delay for better UX
        setTimeout(() => setShowEllipsis(true), 200);
      } else {
        setIsOverflowing(false);
        setShowEllipsis(false);

        // Set height based on content, but with minimum
        if (scrollHeight <= 24) {
          contentRef.current.style.height = '24px';
          contentRef.current.style.maxHeight = '24px';
        } else {
          contentRef.current.style.height = scrollHeight + 'px';
          contentRef.current.style.maxHeight = scrollHeight + 'px';
        }
        contentRef.current.style.overflow = 'visible';
        contentRef.current.style.resize = 'none';
      }
    }
  };

  const resetHeight = () => {
    if (contentRef.current) {
      setIsOverflowing(false);
      setShowEllipsis(false);
      contentRef.current.style.height = '24px';
      contentRef.current.style.maxHeight = '24px';
      contentRef.current.style.overflow = 'visible';
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
      resetHeight();

      if (contentRef.current) {
        contentRef.current.innerText = '';
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

  // Reset height when inputValue becomes empty
  useEffect(() => {
    if (!inputValue.trim()) {
      resetHeight();
    }
  }, [inputValue]);

  // Set initial height on mount
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = '24px';
      contentRef.current.style.maxHeight = '250px';
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
          {/* {showEllipsis && isOverflowing && ( */}
          {/* <div className={styles.ellipsisIndicator}> */}
          {/* <span className={styles.ellipsisText}>📜</span> */}
          {/* <span className={styles.ellipsisHint}>Scroll to see more</span> */}
          {/* </div> */}
          {/* )} */}
        </div>
      </div>
      <div className={styles.promptAreaFooter}>
        <UploadButton onClick={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}
