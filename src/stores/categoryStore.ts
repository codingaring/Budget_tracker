import { CategoryIdType } from '#components/Category/CategoryOptions';
import { create } from 'zustand';

export const useCategoryStore = create<{
  currentCategory: CategoryIdType;
  setCurrentCategory: (category: CategoryIdType) => void;
}>(set => ({
  currentCategory: 'expense',
  setCurrentCategory: category => {
    set({ currentCategory: category });
  },
}));
