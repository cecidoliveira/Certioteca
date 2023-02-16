import { createGlobalStyle } from "styled-components";
import imagem from './assets/detalhes.svg'

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: 62.5%;
    }
    body {
        background-color: #7AC5E5;
        background-image: url(${imagem});
        background-size: cover;
    }
`;