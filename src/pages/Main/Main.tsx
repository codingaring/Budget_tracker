import Category from '#components/Category/Category';
import * as S from './Main.style';
import { useCategoryStore } from '#stores/categoryStore';

function Main() {
  const { currentCategory } = useCategoryStore();
  return (
    <S.MainLayout>
      <Category />
      <S.Body>{currentCategory}</S.Body>
    </S.MainLayout>
  );
}

export default Main;
