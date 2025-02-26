import { ContainerHeight } from '#styles/BaseLayout.style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  gap: 48px;
  padding: 100px 50px;

  ${ContainerHeight}
`;

export const LandingCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const LandingCardStyle = styled.div`
  background-color: var(--color-gray-200);
  border-radius: 10px;
  padding: 16px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 220px;
  height: 220px;

  &:hover {
    background-color: var(--color-gray-300);

    > img {
      transform: scale(1.1);
    }
  }

  > img {
    width: 116px;
    transition: transform 0.18s ease-in-out;
  }

  > p {
    text-align: center;
    font-weight: 800;
    color: var(--color-gray-700);
    font-size: 14px;
    line-height: 120%;
  }
`;

export const HomeHeaderStyle = styled.header`
  text-align: center;

  > h2 {
    color: #a1c8ff;
    text-align: center;
    font-size: 20px;
  }

  > h1 {
    color: #247af3;
    font-size: 50px;
    font-weight: 700;
    margin-top: 20px;
  }
`;

export const StartButtonStyle = styled(Link)`
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  padding: 16px;
  border-radius: 8px;
  margin-top: 25px;
  cursor: pointer;

  &:active {
    background-color: var(--color-blue-900);
  }
`;
