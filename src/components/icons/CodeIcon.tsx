import * as S from './style/iconContainer.style';
import { type IconProps } from './type/iconProps.type';

const CodeIcon = ({ width = 24, height = 24, color = 'black', style }: IconProps) => {
  return (
    <S.Container
      $style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none">
      <g clipPath="url(#clip0_1_230)">
        <path
          d="M8.69998 15.9L4.79998 12L8.69998 8.09997C9.08998 7.70997 9.08998 7.08997 8.69998 6.69997C8.30998 6.30997 7.68998 6.30997 7.29998 6.69997L2.70998 11.29C2.31998 11.68 2.31998 12.31 2.70998 12.7L7.29998 17.3C7.68998 17.69 8.30998 17.69 8.69998 17.3C9.08998 16.91 9.08998 16.29 8.69998 15.9ZM15.3 15.9L19.2 12L15.3 8.09997C14.91 7.70997 14.91 7.08997 15.3 6.69997C15.69 6.30997 16.31 6.30997 16.7 6.69997L21.29 11.29C21.68 11.68 21.68 12.31 21.29 12.7L16.7 17.3C16.31 17.69 15.69 17.69 15.3 17.3C14.91 16.91 14.91 16.29 15.3 15.9Z"
          fill={color}
        />
      </g>
    </S.Container>
  );
};

export default CodeIcon;
