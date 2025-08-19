import React from 'react';

interface DeleteIconProps {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const DeleteIcon: React.FC<DeleteIconProps> = ({
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
        d="M13.0002 4.16682L12.5868 10.8535C12.4802 12.5602 12.4268 13.4135 12.0002 14.0268C11.7868 14.3335 11.5135 14.5868 11.2002 14.7802C10.5602 15.1668 9.70684 15.1668 7.9935 15.1668C6.28017 15.1668 5.42684 15.1668 4.78684 14.7735C4.4735 14.5802 4.20017 14.3268 3.98684 14.0202C3.56017 13.4068 3.50684 12.5535 3.40684 10.8402L3.00684 4.16016"
        stroke="#454547"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 4.16675H14M10.7067 4.16675L10.2533 3.22675C9.95333 2.60009 9.8 2.29342 9.54 2.10009C9.48 2.06009 9.42 2.02009 9.36 1.98675C9.07333 1.84009 8.72667 1.84009 8.03333 1.84009C7.34 1.84009 6.96667 1.84009 6.67333 1.99342C6.60667 2.02675 6.54667 2.06675 6.48667 2.11342C6.22 2.31342 6.07333 2.64009 5.78 3.28675L5.37333 4.17342"
        stroke="#454547"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DeleteIcon;
