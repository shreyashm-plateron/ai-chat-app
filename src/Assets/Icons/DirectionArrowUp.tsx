import React from 'react';

export interface DirectionArrowUpProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const DirectionArrowUp: React.FC<DirectionArrowUpProps> = ({
  width = 14,
  height = 14,
  className = '',
  style = {},
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M7.00024 1.04419L7.00024 12.9559"
        stroke="#F8F8FB"
        strokeWidth="1.24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.27835 4.76586C3.27835 4.76586 6.02001 1.04419 7.00001 1.04419C7.98001 1.04419 10.7217 4.76586 10.7217 4.76586"
        stroke="#F8F8FB"
        strokeWidth="1.24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DirectionArrowUp;
