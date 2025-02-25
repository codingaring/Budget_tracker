import styled from 'styled-components';
import { TITLE_BAR_HEIGHT } from '../../styles/StyleConstants';

export const TitleBarLayout = styled.div`
  background-color: var(--color-primary);
  display: flex;
  justify-content: right;
  max-height: ${TITLE_BAR_HEIGHT}px;
  -webkit-app-region: drag;
`;

export const AppControlButton = styled.button`
  -webkit-app-region: no-drag;
  padding: 10px 20px;

  &:hover {
    background-color: var(--color-blue-900);
  }

  > img {
    width: 12px;
    height: 12px;
  }
`;
