import * as S from './style/iconContainer.style';
import { type IconProps } from './type/iconProps.type';

const DoubleSolidSquareIcon = ({ width = 21, height = 21, color = 'white', style }: IconProps) => {
  return (
    <S.Container
      $style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.56519 2H18C18.5523 2 19 2.44772 19 3V14.3478C19 14.9001 18.5523 15.3478 18 15.3478H16.4348V6.65216C16.4348 4.99531 15.0916 3.65216 13.4348 3.65216H6.56519V3C6.56519 2.44772 7.0129 2 7.56519 2ZM4.56519 3.65216V3C4.56519 1.34314 5.90833 0 7.56519 0H18C19.6568 0 21 1.34315 21 3V14.3478C21 16.0047 19.6568 17.3478 18 17.3478H16.4348V18C16.4348 19.6568 15.0916 21 13.4348 21H3C1.34315 21 0 19.6568 0 18V6.65216C0 4.99531 1.34315 3.65216 3 3.65216H4.56519ZM14.4348 17.3478V18C14.4348 18.5523 13.9871 19 13.4348 19H3C2.44772 19 2 18.5523 2 18V6.65216C2 6.09988 2.44771 5.65216 3 5.65216H4.56519V14.3478C4.56519 16.0047 5.90833 17.3478 7.56519 17.3478H14.4348ZM14.4348 15.3478H7.56519C7.0129 15.3478 6.56519 14.9001 6.56519 14.3478V5.65216H13.4348C13.9871 5.65216 14.4348 6.09988 14.4348 6.65216V15.3478Z"
        fill={color}
      />
    </S.Container>
  );
};

export default DoubleSolidSquareIcon;
