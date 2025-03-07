import * as S from './style/iconContainer.style';
import { type IconProps } from './type/iconProps.type';

const PenToSquareSolidIcon = ({ width = 16, height = 16, color = 'white', style }: IconProps) => {
  return (
    <S.Container
      $style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none">
      <g clipPath="url(#clip0_4_221)">
        <path
          d="M14.7375 0.678122C14.0531 -0.00625308 12.9469 -0.00625308 12.2625 0.678122L11.3219 1.61562L14.3813 4.675L15.3219 3.73437C16.0063 3.05 16.0063 1.94375 15.3219 1.25937L14.7375 0.678122ZM5.3875 7.55312C5.19688 7.74375 5.05 7.97812 4.96563 8.2375L4.04063 11.0125C3.95 11.2812 4.02188 11.5781 4.22188 11.7812C4.42188 11.9844 4.71875 12.0531 4.99063 11.9625L7.76563 11.0375C8.02188 10.9531 8.25625 10.8062 8.45 10.6156L13.6781 5.38437L10.6156 2.32187L5.3875 7.55312ZM3 2C1.34375 2 0 3.34375 0 5V13C0 14.6562 1.34375 16 3 16H11C12.6563 16 14 14.6562 14 13V10C14 9.44687 13.5531 9 13 9C12.4469 9 12 9.44687 12 10V13C12 13.5531 11.5531 14 11 14H3C2.44688 14 2 13.5531 2 13V5C2 4.44687 2.44688 4 3 4H6C6.55313 4 7 3.55312 7 3C7 2.44687 6.55313 2 6 2H3Z"
          fill={color}
        />
      </g>
    </S.Container>
  );
};

export default PenToSquareSolidIcon;
