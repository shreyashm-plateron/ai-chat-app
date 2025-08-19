import React from 'react';

interface ExpandProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  onClick?: () => void;
  color?: string;
}

const Expand: React.FC<ExpandProps> = ({
  width = 16,
  height = 16,
  className = '',
  onClick,
  color = '#454547',
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
        d="M9.40025 6.6L13.3469 2.65333M13.3469 2.65333C12.7202 2.02666 9.78025 2.64 8.89358 2.65333M13.3469 2.65333C13.9736 3.28 13.3602 6.22 13.3469 7.10666M2.65358 13.3467L6.62025 9.38M2.65358 13.3467C2.02691 12.72 2.64025 9.78 2.65358 8.89333M2.65358 13.3467C3.28025 13.9733 6.22025 13.36 7.10691 13.3467"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Expand;
