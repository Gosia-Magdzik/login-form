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
        background: linear-gradient(90deg, #808080, #995199);
        font-family: 'IBM Plex Sans', monospace;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }; 
`;    