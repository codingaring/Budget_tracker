import Category from '#components/Category/Category';
import * as S from './Main.style';
import { useCategoryStore } from '#stores/categoryStore';
import { useEffect, useState } from 'react';

function Main() {
  const { currentCategory } = useCategoryStore();
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { categories } = await window.ipcRenderer.getCategories();
      setCategoriesData(categories);
    };

    fetchCategories();
  }, []);

  return (
    <S.MainLayout>
      <Category />
      <S.Body>
        {currentCategory}
        {categoriesData}
      </S.Body>
    </S.MainLayout>
  );
}

export default Main;
