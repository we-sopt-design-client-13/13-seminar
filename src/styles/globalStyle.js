import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body, #root {
        padding: 0;
        margin: 0;
        font-size: 62.5%;
        font-family: 'Noto Sans KR', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    @media (max-width: 90rem) {
        :root {
            --screen-width: 89.6rem;
        }
    }

    @media screen and (max-width: 76.8rem) {
        :root {
            --screen-width: 53.226rem;
        }
    }

    @media screen and (max-width: 36rem) {
        :root {
            --screen-width: 31.192rem;
        }
    }

    button:hover {
        cursor: pointer;
    }
`;

export default GlobalStyle;
