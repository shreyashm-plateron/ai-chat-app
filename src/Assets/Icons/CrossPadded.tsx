import React from 'react';

interface CrossPaddedIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  onClick?: () => void;
}

const CrossPaddedIcon: React.FC<CrossPaddedIconProps> = ({
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
        d="M3.33318 3.33337L12.6665 12.6667M12.6665 3.33337L3.33318 12.6667"
        stroke="#454547"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CrossPaddedIcon;
