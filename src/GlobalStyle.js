import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        background: linear-gradient(90deg, #b6fdbf, #a8ff78);
        font-family: 'IBM Plex Sans', monospace;
    }; 
`;    