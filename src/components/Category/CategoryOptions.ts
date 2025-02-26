import PenToSquareSolidIcon from '#components/icons/PenToSquareSolidIcon';
import BullseyeArrowSolidIcon from '#components/icons/BullseyeArrowSolidIcon';
import GraphIcon from '#components/icons/GraphIcon';
import { IconProps } from '#components/icons/type/iconProps.type';

export type CategoryIdType = 'expense' | 'budget' | 'chart';

export type CategoryOptionsType = {
  id: CategoryIdType;
  categoryName: string;
  icon: (props: IconProps) => JSX.Element;
};

export const CategoryOptions: CategoryOptionsType[] = [
  { id: 'expense', categoryName: '소비 기록 작성 및 조회', icon: PenToSquareSolidIcon },
  { id: 'budget', categoryName: '소비 목표 수립', icon: BullseyeArrowSolidIcon },
  { id: 'chart', categoryName: '소비 통계 보기', icon: GraphIcon },
];
