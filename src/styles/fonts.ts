import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
  // Gmarket_Sans
    @font-face {
        font-family: 'GmarketSansMedium';
        src : local('GmarketSansMedium'), local('GmarketSansMedium');
        src: url('/fonts/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
  }
`;

export default Fonts;
