import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #f5f5f5;
    }
`;

export default function GlobalStyle() {
  return <StyledGlobalStyle />;
}
