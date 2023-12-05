import styled from "styled-components";


export const Container = styled.section`
min-height: 100vh;
padding: 2rem 4rem;
background-color: #6DA6BE;

        article h1{
            font-size: 30px;
            font-family: font-family: 'Noto Sans Linear A', sans-serif;
            color: #393939;
            font-weight: 600;
            padding: 2rem 3rem;
            border-bottom: 5px solid black;
            width: 40%;
        }

        div {
            display: flex;
            flex-direction: column;
            padding: 24px;
        }

        div h1 {
            border-bottom: 1px solid black;
            font-size: 26px;
            font-weight: 600;
            width: 100%;
            text-align: center;
            color: white;
            padding-bottom: 20px;
            font-family: 'Roboto', sans-serif;
        }

        div p {
            padding-top: 1rem;
            color: #393939;
            font-family: 'Roboto', sans-serif;
            font-size: 24px;
            font-weight: 700;
        }
      

`