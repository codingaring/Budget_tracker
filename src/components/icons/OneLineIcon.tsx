import * as S from './style/iconContainer.style';
import { type IconProps } from './type/iconProps.type';

const OneLineIcon = ({ width = 23, height = 2, color = 'white', style }: IconProps) => {
  return (
    <S.Container
      $style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 23 2"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1726 1C22.1726 1.55228 21.7249 2 21.1726 2L1.56934 2C1.01706 2 0.56934 1.55228 0.56934 0.999999C0.56934 0.447715 1.01706 -6.60417e-07 1.56934 -6.43177e-07L21.1726 -3.12172e-08C21.7249 -1.39764e-08 22.1726 0.447715 22.1726 1Z"
        fill={color}
      />
    </S.Container>
  );
};

export default OneLineIcon;
