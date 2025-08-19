import React from 'react';

interface SearchIconProps {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const SearchIcon: React.FC<SearchIconProps> = ({
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
      <g clipPath="url(#clip0_469_11115)">
        <path
          d="M10.3311 10.3311L12.9969 12.9969"
          stroke="#454547"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6609 6.33511C11.6609 3.38928 9.27508 1.00928 6.33508 1.00928C3.39508 1.00928 1.00342 3.38928 1.00342 6.33511C1.00342 9.28094 3.38925 11.6609 6.32925 11.6609C9.26925 11.6609 11.6551 9.27511 11.6551 6.33511H11.6609Z"
          stroke="#454547"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_469_11115">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
