import React from 'react';

interface ExternalOpenProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  onClick?: () => void;
}

const ExternalOpen: React.FC<ExternalOpenProps> = ({
  width = 14,
  height = 14,
  className = '',
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <path
        d="M5.83333 1.75C4.1125 1.7675 3.15583 1.87833 2.52 2.51417C1.75 3.28417 1.75 4.52083 1.75 6.99417C1.75 9.4675 1.75 10.71 2.52 11.4742C3.29 12.2442 4.52667 12.2442 7 12.2442C9.47333 12.2442 10.7158 12.2442 11.48 11.4742C12.1158 10.8383 12.2267 9.87583 12.2442 8.155"
        stroke="#F8F8FB"
        strokeWidth="1.24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.1665 1.75H10.4998C11.3223 1.75 11.7365 1.75 11.9932 2.00667C12.2498 2.26333 12.2498 2.6775 12.2498 3.5V5.83333M11.6665 2.33333L6.4165 7.58333"
        stroke="#F8F8FB"
        strokeWidth="1.24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ExternalOpen;
