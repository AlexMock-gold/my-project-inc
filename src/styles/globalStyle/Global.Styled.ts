import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        border: none;
        background-color: unset;
        cursor: pointer;
    }
`