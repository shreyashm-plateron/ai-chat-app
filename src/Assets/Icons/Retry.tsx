import React from 'react';

interface RetryIconProps {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const RetryIcon: React.FC<RetryIconProps> = ({
  width = 20,
  height = 20,
  className = '',
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <path
        d="M16.6667 9.16675L18.3334 10.0001C18.3334 5.40008 14.6001 1.66675 10.0001 1.66675C6.58342 1.66675 3.65008 3.72508 2.35841 6.66675M3.33341 10.8334L1.66675 10.0001C1.66675 14.6001 5.40008 18.3334 10.0001 18.3334C13.4167 18.3334 16.3501 16.2751 17.6417 13.3334"
        stroke="#454547 "
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RetryIcon;
