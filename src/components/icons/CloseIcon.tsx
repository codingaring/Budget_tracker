import * as S from './style/iconContainer.style';
import { type IconProps } from './type/iconProps.type';

const CloseIcon = ({ width = 16, height = 16, color = 'black', style }: IconProps) => {
  return (
    <S.Container
      $style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8812 16.0265C14.2678 16.4209 14.901 16.4273 15.2954 16.0407C15.6898 15.6541 15.6961 15.021 15.3095 14.6266L9.39455 8.59184L15.3095 2.55714C15.6961 2.16272 15.6898 1.52959 15.2954 1.14299C14.901 0.756401 14.2678 0.762743 13.8812 1.15716L7.99429 7.16325L2.10735 1.15716C1.72075 0.762743 1.08762 0.7564 0.693203 1.14299C0.298786 1.52959 0.292443 2.16272 0.679036 2.55714L6.59403 8.59184L0.679034 14.6265C0.292442 15.021 0.298784 15.6541 0.693201 16.0407C1.08762 16.4273 1.72075 16.4209 2.10734 16.0265L7.99429 10.0204L13.8812 16.0265Z"
        fill={color}
      />
    </S.Container>
  );
};

export default CloseIcon;
