import React from 'react';

interface AiIconWhiteProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  onClick?: () => void;
}

const AiIconWhite: React.FC<AiIconWhiteProps> = ({
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
      <g clipPath="url(#clip0_529_10656)">
        <g filter="url(#filter0_i_529_10656)">
          <path
            d="M4.93848 5.99988C5.76721 5.98616 5.86961 8.598 6.74219 9.16394C7.61491 9.72976 10.0131 10.3683 10 10.9052C9.98546 11.4422 6.77086 12.1538 6.40723 13.1698C6.04367 14.1856 5.56373 15.9847 4.93848 15.9999C4.31303 16.0144 3.97783 13.939 3.46875 13.1698C3.06146 12.5545 2.20335 12.1589 1.8252 12.038C1.17546 11.8686 -0.109516 11.3579 0.00683594 10.9052C0.153115 10.3392 2.55307 9.78791 3.13477 9.16394C3.71649 8.5396 4.10947 6.01439 4.93848 5.99988ZM13.4688 5.99988C13.8833 5.99262 13.9347 7.29889 14.3711 7.58191C14.8076 7.8649 16.0073 8.18454 16 8.453C15.9919 8.72148 14.3849 9.077 14.2031 9.58484C14.0213 10.0928 13.7814 10.9926 13.4688 10.9999C13.1562 11.0066 12.9888 9.96935 12.7344 9.58484C12.5308 9.27732 12.1023 9.07901 11.9131 9.01843C11.5883 8.93379 10.946 8.67938 11.0039 8.453C11.0766 8.16999 12.2765 7.89395 12.5674 7.58191C12.8582 7.26972 13.0544 6.00763 13.4688 5.99988ZM8.48145 0.999878C8.73008 0.995721 8.76069 1.77929 9.02246 1.9491C9.28422 2.11887 10.0041 2.31048 10 2.47156C9.99564 2.63266 9.03096 2.84646 8.92188 3.15125C8.81282 3.45605 8.66896 3.99535 8.48145 3.99988C8.29393 4.00423 8.19358 3.38235 8.04102 3.15125C7.91895 2.9668 7.66146 2.8478 7.54785 2.8114C7.35295 2.7606 6.96704 2.6074 7.00195 2.47156C7.04572 2.30177 7.76591 2.1363 7.94043 1.9491C8.11491 1.76168 8.23277 1.00423 8.48145 0.999878Z"
            fill="#F8F8FB"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_529_10656"
          x="-0.000488281"
          y="0.999878"
          width="16.2005"
          height="15.2001"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.2" dy="0.2" />
          <feGaussianBlur stdDeviation="0.4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0784314 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_529_10656"
          />
        </filter>
        <clipPath id="clip0_529_10656">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AiIconWhite;
