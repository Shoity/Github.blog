import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        -webkit-font-smoothing: antialised;
        -moz-osx-font-smoothing: grayscale;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['blue']};
    }

    body{
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialised;
    }
    body,input, textarea, button {
        font-family: 'Nunito';
        font-weight: 400;
        font-size: 1rem;
    }
`