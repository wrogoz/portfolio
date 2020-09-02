import {createGlobalStyle} from 'styled-components';

import michromaregular from './michroma-regular-webfont.woff2'

export default createGlobalStyle`
    @font-face {
    font-family: 'michromaregular';
    src: url(${michromaregular}) format('woff2'),
         url(${michromaregular}) format('woff');
       
    font-weight: normal;
    font-style: normal;

}
`