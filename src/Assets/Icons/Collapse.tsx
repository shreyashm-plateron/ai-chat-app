import React from 'react';

interface CollapseIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  onClick?: () => void;
}

const CollapseIcon: React.FC<CollapseIconProps> = ({
  width = 16,
  height = 16,
  className = '',
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <path
        d="M2.6665 13.3334L6.61317 9.38674M6.61317 9.38674C5.9865 8.76007 3.0465 9.37341 2.15984 9.38674M6.61317 9.38674C7.23984 10.0134 6.6265 12.9534 6.61317 13.8401M9.36649 6.63339L13.3332 2.66672M9.36649 6.63339C8.73983 6.00672 9.35316 3.06672 9.36649 2.18005M9.36649 6.63339C9.99316 7.26005 12.9332 6.64672 13.8198 6.63339"
        stroke="#454547"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CollapseIcon;
