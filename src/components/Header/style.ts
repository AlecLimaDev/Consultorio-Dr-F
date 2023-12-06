import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #ffffff;
height: 15vh;
padding: 2px;

    ul {
        display: flex;
        gap: 20px;
        margin-right: 20px;
    }

    ul li {
        font-family: sans-serif;
        color: black;
    }

    ul li a {
            min-width: 500px;
            padding: 15px;
            background-color: #fbec5d;
            border: none;
            color: black;
            font-family: sans-serif;
            border-radius: 200px;
            cursor: pointer;
            text-decoration: none;
    } 


    ul button {
        font-family: sans-serif;
        width: 200px;
        border-radius: 10%;
    }

    figure {
        font-family: sans-serif;
        font-size: 20px;
        font-weight: 800;
        color: black;
        margin-left: 20px;
    }



    @media (max-width: 600px) {

        figure {
            font-weight: 800;
            color: black;
        }

        ul {
            position: relative; 
            display: flex;
            flex-direction: column;
        }

        li {
            font-size: 12px;
            font-weight: 700;
        }

`

