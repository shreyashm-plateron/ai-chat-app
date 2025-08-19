import React from 'react';

interface EditIconProps {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const EditIcon: React.FC<EditIconProps> = ({
  width = 16,
  height = 17,
  className = '',
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <path
        d="M2.52 11.3734L2 14.5L5.12667 13.98C5.66667 13.8867 6.17333 13.6334 6.56 13.24L13.6133 6.18671C14.1267 5.67338 14.1267 4.83338 13.6133 4.32004L12.18 2.88671C11.6667 2.37338 10.8267 2.37338 10.3133 2.88671L3.26 9.94004C2.87333 10.3267 2.61333 10.8334 2.52 11.3734Z"
        stroke="#454547"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.3335 4.5L12.0002 7.16667"
        stroke="#454547"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
