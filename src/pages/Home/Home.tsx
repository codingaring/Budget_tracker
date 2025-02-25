import * as S from './Home.style';
import { LandingCardOptions } from './LandingCardOptions';

function Home() {
  return (
    <S.HomeLayout>
      <S.HomeHeaderStyle>
        <h2>소박한 내 통장의 잔액을 소생시켜보자</h2>
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
      <S.StartButtonStyle type="button">시작하기</S.StartButtonStyle>
    </S.HomeLayout>
  );
}

export default Home;
