import styled from "styled-components"



export const Container = styled.section`
    min-height: 100vh;
    background-color: #ffffff;
    padding: 2rem 3rem;


        article h1 {
            font-size: 30px;
            font-family: font-family: 'Noto Sans Linear A', sans-serif;
            color: #393939;
            font-weight: 600;
            padding: 2rem 3rem;
            border-bottom: 5px solid black;
            width: 40%;
            margin-bottom: 20px;
        }

        div {
            display: flex;
            padding: 20px;
        }

        div p {
            font-size: 24px;
            font-weight: 700;
            font-family: sans-serif;
        }

        div img {
            max-height: 600px;
            object-fit: cover;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;         
            border-radius: 20px;    
            animation: Dentes 500ms infinite ease-out;
        }





        @keyframes Dentes {
            to {
              transform: rotate(1deg) translate(0px, 0px);
            }
          }



`