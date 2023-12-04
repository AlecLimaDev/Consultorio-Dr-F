import styled from "styled-components";

export const Container = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: #00c3a5;
    color: white;
    

        iframe {
            box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
            border-radius: 20px;
        }

        div {
            display: flex;
            flex-direction: column;    
            align-items: center;     
            padding: 20px;       
        }
    
        h1 { 
            font-size: 40px;
            font-weight: 700;
            text-align: center;
            font-family: 'Noto Sans Linear A', sans-serif;
        }

        h5 {
            font-family: 'Boogaloo', sans-serif;
            font-size: 36px;
            text-align: center;
        }

        p {
            font-size: 18px;
            text-align: center;
            margin: 70px;
        }

        button {
            min-width: 500px;
            padding: 15px;
            background-color: #00FF00;
            border: none;
            color: black;
            font-family: sans-serif;
            border-radius: 200px;
            cursor: pointer;
        }
`