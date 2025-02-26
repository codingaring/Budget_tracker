import * as S from './style/iconContainer.style';
import { type IconProps } from './type/iconProps.type';

const GraphIcon = ({ width = 16, height = 14, color = 'white', style }: IconProps) => {
  return (
    <S.Container
      $style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none">
      <path
        d="M5.71429 1.5C5.71429 0.671875 6.48214 0 7.42857 0H8.57143C9.51786 0 10.2857 0.671875 10.2857 1.5V12.5C10.2857 13.3281 9.51786 14 8.57143 14H7.42857C6.48214 14 5.71429 13.3281 5.71429 12.5V1.5ZM0 7.5C0 6.67188 0.767857 6 1.71429 6H2.85714C3.80357 6 4.57143 6.67188 4.57143 7.5V12.5C4.57143 13.3281 3.80357 14 2.85714 14H1.71429C0.767857 14 0 13.3281 0 12.5V7.5ZM13.1429 2H14.2857C15.2321 2 16 2.67188 16 3.5V12.5C16 13.3281 15.2321 14 14.2857 14H13.1429C12.1964 14 11.4286 13.3281 11.4286 12.5V3.5C11.4286 2.67188 12.1964 2 13.1429 2Z"
        fill={color}
      />
    </S.Container>
  );
};

export default GraphIcon;
