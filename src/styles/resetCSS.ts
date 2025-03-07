import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: middle;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
  font-size: 62.5%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

body {
    line-height: 1;
    font-size: 1.6rem;
    font-family: 'GmarketSansMedium';
    height : 100vh;

    > #root {
      height : 100%;
    }
  }

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}


ol,
ul,
li {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  all: unset;
} 

textarea, input {
  font-family: unset;
  border: none;
  outline: none;
  background-color: transparent;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  all : unset;
}
`;

export default ResetStyles;
