import React from 'react';

export interface AIIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const AIIcon: React.FC<AIIconProps> = ({
  width = 21,
  height = 20,
  className = '',
  style = {},
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g clipPath="url(#clip0_417_9399)">
        <g filter="url(#filter0_i_417_9399)">
          <path
            d="M6.67331 7.50002C7.70944 7.48212 7.83667 10.7471 8.92721 11.4551C10.018 12.1625 13.0179 12.9607 13.0005 13.6319C12.9823 14.3031 8.96413 15.1921 8.50925 16.4619C8.05473 17.7318 7.45506 19.9817 6.67331 20C5.89151 20.0182 5.47275 17.4235 4.83639 16.4619C4.32727 15.6931 3.25542 15.1981 2.78268 15.0469C1.97058 14.8352 0.363795 14.1979 0.509246 13.6319C0.691384 12.9244 3.69097 12.2351 4.41843 11.4551C5.14568 10.675 5.63697 7.51816 6.67331 7.50002ZM17.3364 7.50002C17.8546 7.49095 17.9189 9.12379 18.4643 9.47756C19.0099 9.8313 20.5095 10.2308 20.5005 10.5664C20.49 10.902 18.4825 11.3467 18.2553 11.9815C18.0281 12.6165 17.7273 13.741 17.3364 13.75C16.9458 13.7582 16.7364 12.4622 16.4184 11.9815C16.1639 11.5969 15.6274 11.3491 15.3911 11.2735C14.9851 11.1676 14.1832 10.8493 14.2553 10.5664C14.3462 10.2127 15.8457 9.86759 16.2094 9.47756C16.573 9.08761 16.8185 7.50993 17.3364 7.50002ZM11.102 1.25002C11.4129 1.24458 11.4515 2.22428 11.7788 2.43655C12.1061 2.64879 13.0059 2.88851 13.0005 3.08987C12.9942 3.29121 11.7892 3.55768 11.6528 3.9385C11.5164 4.31948 11.3366 4.99458 11.102 5.00002C10.8676 5.00493 10.7421 4.22686 10.5512 3.9385C10.3985 3.70793 10.0769 3.56007 9.93503 3.51467C9.69147 3.45119 9.21007 3.25964 9.25339 3.08987C9.30793 2.8776 10.2081 2.67058 10.4262 2.43655C10.6443 2.20229 10.7914 1.25595 11.102 1.25002Z"
            fill="url(#paint0_linear_417_9399)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_417_9399"
          x="0.5"
          y="1.25"
          width="20.251"
          height="19.0001"
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
          <feOffset dx="0.25" dy="0.25" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0784314 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_417_9399"
          />
        </filter>
        <linearGradient
          id="paint0_linear_417_9399"
          x1="0.5"
          y1="1.25"
          x2="21.5423"
          y2="2.50292"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5686C" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
        <clipPath id="clip0_417_9399">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AIIcon;
