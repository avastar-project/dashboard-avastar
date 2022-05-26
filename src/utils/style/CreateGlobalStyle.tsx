import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    /* :root represents globals styles vars */
    :root {

        /*background color */
        --bck-clr:linear-gradient(180deg, #02272C -230%, #06092B 623.13%, #081B43 1570%);
        
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

        --clr-blue-dark: #002199;
        --clr-blue-primary:#0034F5;
        --clr-blue-light:#9CB1FF;

        
        /* Shadows */
        --bx-shdw-light: 0 0 5px 0 var(--clr-dark);

        /* Table-styled */
        --tab-radius:8px;
        --tab-mdSpacing:16px;
        --tab-smSpacing:8px;
        --tab-lgSpacing:32px;
        --tab-sm: 37.5em;
        --tab-md: 48em;
        --tab-lg: 64em;
        --tab-boxShadow:
            0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11);
            
        --tab-clr-white:rgb(255, 255, 255);
        --tab-clr-bg: rgb(245, 245, 245);
        --tab-clr-bg2: rgb(237, 237, 237);
        --tab-clr-bg3: rgb(214, 214, 214);
        --tab-clr-text: rgb(33, 33, 33);
        --tab-clr-primary: rgb(224, 132, 209);
    }

    /* CSS Rules for entire document element */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    /* Body CSS Rule */
    body {
        background-color: var(--clr-lighter);
    }

    a {
        text-decoration: none;
    }
`;

export default function GlobalStyle() {
  return <StyledGlobalStyle />;
}
