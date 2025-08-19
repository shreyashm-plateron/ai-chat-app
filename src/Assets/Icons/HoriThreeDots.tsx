import React from 'react';

interface HoriThreeDotsIconProps {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const HoriThreeDotsIcon: React.FC<HoriThreeDotsIconProps> = ({
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
        d="M7.1665 7.99984C7.1665 7.53984 7.53984 7.1665 7.99984 7.1665C8.45984 7.1665 8.83317 7.53984 8.83317 7.99984C8.83317 8.4665 8.45984 8.83984 7.99984 8.83984C7.53984 8.83984 7.1665 8.4665 7.1665 8.0065V7.99984Z"
        fill="#454547"
      />
      <path
        d="M3.1665 7.99325C3.1665 7.53325 3.53984 7.15991 3.99984 7.15991C4.45984 7.15991 4.83317 7.53325 4.83317 7.99325C4.83317 8.45991 4.45984 8.83325 3.99984 8.83325C3.53984 8.83325 3.1665 8.45991 3.1665 7.99991V7.99325Z"
        fill="#454547"
      />
      <path
        d="M11.1665 8.00667C11.1665 7.54667 11.5398 7.17334 11.9998 7.17334C12.4598 7.17334 12.8332 7.54667 12.8332 8.00667C12.8332 8.47334 12.4598 8.84667 11.9998 8.84667C11.5398 8.84667 11.1665 8.47334 11.1665 8.01334V8.00667Z"
        fill="#454547"
      />
    </svg>
  );
};

export default HoriThreeDotsIcon;
