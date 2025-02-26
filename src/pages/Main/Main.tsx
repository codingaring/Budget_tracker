import Category from '#components/Category/Category';
import { Link } from 'react-router-dom';
import * as S from './Main.style';

function Main() {
  return (
    <S.MainLayout>
      <Category />
      <S.Body>
        메인
        <Link to={'/'}>홈</Link>
      </S.Body>
    </S.MainLayout>
  );
}

export default Main;
