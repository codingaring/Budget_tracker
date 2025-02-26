import styled from 'styled-components';

export const CategoryLayout = styled.nav`
  width: 20%;
  min-width: 240px;
  max-width: 300px;
  border-right: 1px solid var(--color-gray-300);
`;

export const ApplicationTitle = styled.header`
  width: 100%;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  font-size: 20px;
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-gray-400);
  user-select: none;
`;

export const CategoryButton = styled.button<{ $isSelect: boolean }>`
  box-sizing: inherit;
  color: ${({ $isSelect }) => ($isSelect ? `var(--color-white)` : 'var(--color-primary)')};
  background-color: ${({ $isSelect }) => $isSelect && `var(--color-primary)`};
  padding: 16px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ $isSelect }) =>
      $isSelect ? `var(--color-primary)` : 'var(--color-gray-200)'};
  }
`;

export const SettingButton = styled.button`
  display: flex;
`;
