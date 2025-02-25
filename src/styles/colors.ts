import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    --color-primary : var(--color-blue-800);
    --color-secondary : var(--color-yellow-500);

    // Overlay
    --color-overlay-90 : rgba(54 54 54 0.9);
    --color-overlay-80 : rgba(54 54 54 0.8);
    --color-overlay-60 : rgba(54 54 54 0.6);
    --color-overlay-40 : rgba(54 54 54 0.4);
    --color-overlay-20 : rgba(54 54 54 0.2);

    // Pure
    --color-black : #000;
    --color-white : #fff;

    // Blue
    --color-blue-900 : #1C66CF;
    --color-blue-800 : #247AF3;
    --color-blue-700 : #3388FF;
    --color-blue-600 : #559CFF;
    --color-blue-500 : #75AEFF;
    --color-blue-400 : #8EBDFF;
    --color-blue-300 : #A9CDFF;
    --color-blue-200 : #C1DBFF;
    --color-blue-100 : #E1EEFF;

    // Gray
    --color-gray-900 : #171717;
    --color-gray-800 : #242424;
    --color-gray-700 : #3d3d3d;
    --color-gray-600 : #6f6f6f;
    --color-gray-500 : #c1c1c1;
    --color-gray-400 : #d9d9d9;
    --color-gray-300 : #ececec;
    --color-gray-200 : #f5f4f3;
    --color-gray-100 : #fbfbfb;

    // Yellow
    --color-yellow-900 : #996e00;
    --color-yellow-800 : #cc9200;
    --color-yellow-700 : #e6a400;
    --color-yellow-600 : #ffb700;
    --color-yellow-500 : #FFC965;
    --color-yellow-400 : #ffe642;
    --color-yellow-300 : #ffed7a;
    --color-yellow-200 : #fff4ad;
    --color-yellow-100 : #fffbe1;

    // Green
    --color-green-900 : #1e483b ;
    --color-green-800 : #2a6552 ;
    --color-green-700 : #36826a ;
    --color-green-600 : #3c9075 ;
    --color-green-500 : #429e81 ;
    --color-green-400 : #48ad8d ;
    --color-green-300 : #52b797 ;
    --color-green-200 : #6fc3a8 ;
    --color-green-100 : #7dc9b1 ;
  }
`;

export default Colors;
