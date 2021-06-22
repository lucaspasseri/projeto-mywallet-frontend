import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}
button {
    cursor: pointer;
}

.page {
    background-color: #9056BE;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 550px;
}
.brand-name {
    line-height: 50px;
    color: #FFFFFF;
    text-align: center;
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 24px; 
}

.user-interactions {
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 36px;

        button {
        width: 318px;
        height: 44px;
        background-color: #A762D6;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        border: 0;
        }
    }

    input {
        width: 318px;
        height: 54px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 12px;
        border: 0;
        padding-left: 15px;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        line-height: 23px;

        ::placeholder{
            
            color: #000000;
        }
    }

    .link {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;

        div {
            width: 100%;
            text-align: center;
        }
    }

    @media (max-width: 320px) {
        input {
            width: 100%;
        }

        form {
            button {
                width: 100%;
            } 
        }
    }
}

`;

export default GlobalStyle;