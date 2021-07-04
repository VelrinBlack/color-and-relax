import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    html, body, #__next {
        height: 100%;

        body {
            background-color: ${({ theme }) => theme.color.darkGrey};
        }
    }
    

`;

export default GlobalStyle;
