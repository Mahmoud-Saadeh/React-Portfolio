import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x:hidden;
}
html{
    @media (max-width: 1300px){
        font-size: 80%;
    }
    @media (max-width: 977px){
        font-size: 65%;
    }
    @media (max-width: 470px){
        font-size: 55%;
    }
}
button{
    font-weight: bold;
    font-size:1.1rem;
    cursor: pointer;
    padding:1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition:all 0.5s ease;
    font-family: 'Inter', sans-serif;

    &:hover{
        background-color: #23d997;
        color: white;
    }
    
}
h2{
    font-weight:lighter;
    font-size:3.2rem;
}
h3{
    color: white;
}
h4{
    font-weight:bold;
    font-size:2rem;
}
span{
    color: #23d997;
    font-weight:bold;
}
a{
    font-size:1.1rem;
}
p{
    padding:3rem 0rem;
    color: #ccc;
    font-size:1.4rem;
    line-height:150%;
}
`;

export default GlobalStyle;
