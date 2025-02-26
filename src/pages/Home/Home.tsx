import * as S from './Home.style';
import { LandingCardOptions } from './LandingCardOptions';

function Home() {
  return (
    <S.HomeLayout>
      <S.HomeHeaderStyle>
        <h2>나의 소박한 소비 생활 기록기</h2>
        <h1>소생기</h1>
      </S.HomeHeaderStyle>
      <S.LandingCardContainer>
        {LandingCardOptions.map(option => {
          return (
            <S.LandingCardStyle key={option.description}>
              <img src={option.imgUrl} alt={option.description} />
              <p>{option.description}</p>
            </S.LandingCardStyle>
          );
        })}
      </S.LandingCardContainer>
      <S.StartButtonStyle to={'/main'}>시작하기</S.StartButtonStyle>
    </S.HomeLayout>
  );
}

export default Home;
