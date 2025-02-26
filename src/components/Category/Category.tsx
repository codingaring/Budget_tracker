import * as S from './Category.style';
import { CategoryOptions } from './CategoryOptions';

const isSelect = false;

function Category() {
  return (
    <S.CategoryLayout>
      <S.ApplicationTitle>소생기</S.ApplicationTitle>
      {CategoryOptions.map(category => (
        <S.CategoryButton $isSelect={isSelect} key={category.id} value={category.id}>
          <category.icon color={isSelect ? 'white' : 'var(--color-primary)'} />
          {category.categoryName}
        </S.CategoryButton>
      ))}
    </S.CategoryLayout>
  );
}

export default Category;
