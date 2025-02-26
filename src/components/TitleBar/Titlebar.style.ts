import styled from 'styled-components';

export const TitleBarLayout = styled.div`
  background-color: var(--color-primary);
  display: flex;
  justify-content: right;
  height: 32px;
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
