import styled from 'styled-components';

export const TitleBarLayout = styled.div`
  background-color: #247af3;
  display: flex;
  justify-content: right;
  -webkit-app-region: drag;
`;

export const AppControlButton = styled.button`
  -webkit-app-region: no-drag;
  padding: 10px 20px;

  &:hover {
    background-color: #1c66cf;
  }

  > img {
    width: 12px;
    height: 12px;
  }
`;
