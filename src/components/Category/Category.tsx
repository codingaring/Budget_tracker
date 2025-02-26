import { useCategoryStore } from '#stores/categoryStore';
import { MouseEvent } from 'react';
import * as S from './Category.style';
import { CategoryIdType, CategoryOptions } from './CategoryOptions';

function Category() {
  const { currentCategory, setCurrentCategory } = useCategoryStore();
  return (
    <S.CategoryLayout>
      <S.ApplicationTitle>소생기</S.ApplicationTitle>
      {CategoryOptions.map(category => {
        const isSelect = currentCategory === category.id;

        return (
          <S.CategoryButton
            $isSelect={isSelect}
            key={category.id}
            value={category.id}
            onClick={(event: MouseEvent<HTMLButtonElement>) => {
              setCurrentCategory(event.currentTarget.value as CategoryIdType);
            }}>
            <category.icon color={isSelect ? 'white' : 'var(--color-primary)'} />
            {category.categoryName}
          </S.CategoryButton>
        );
      })}
    </S.CategoryLayout>
  );
}

export default Category;
