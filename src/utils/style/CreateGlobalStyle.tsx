import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    /* :root represents globals styles vars */
    :root {
        /* Borders */
        --bor-light: solid 1px var(--clr-light);
        
        /* Colors */
        --clr-blue: #2567FF;
        --clr-yellow: #F3C7A9;
        --clr-purple: #CFC5FB;
        --clr-blue-light: #C4E8FA;
        --clr-green: #C5E6D2;
        --clr-lightest: #FFFFFF;
        --clr-lighter: #f5f5f5;
        --clr-light: #d6d6d6;
        --clr-darkest: #000000;
        --clr-darker: #1a1a1a;
        --clr-dark: #2b2b2b;

        /* Shadows */
        --bx-shdw-light: 0 0 5px 0 var(--clr-dark);
    }
    
    /* CSS Rules for entire document element */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    /* Body CSS Rule */
    body {
        background-color: var(--clr-lighter);
    }
`;

export default function GlobalStyle() {
  return <StyledGlobalStyle />;
}
