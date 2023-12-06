import styled from "styled-components";

export const ContainerContact = styled.footer`
min-height: 50vh;
background-color: #529FD5;
display: flex;
justify-content: space-evenly;


    ul {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
    }

    ul h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 40px;
        color: white;
    }

    button {
        padding: 10px;
        border-radius: 10px;
        background-color: #00815A;
    }


    button a {
        text-decoration: none;
        color: #D2CF84;
        font-weight: 800;
    }


    @media only screen and (max-width: 449px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 40px;
      }

      @media only screen and (max-width: 687px) {
        padding: 2rem;


        button {
            width: 100%;
        }

        button a {
            text-align: center;
        }
      }

`


export const ContainerClient = styled.footer`
min-height: 50vh;
background-color: #426094;
padding: 2rem 4rem;
display: flex;
flex-direction: column;
gap: 30px;

    div {
        display: flex;
        align-items: center;
}
    


    div h1 {
        border-bottom: 5px solid white;
        font-size: 40px;
        color: white;
        font-family: 'Noto Sans Linear A', sans-serif;
        font-weight: 800;
        padding-bottom: 28px;
    }

    .slide-item {
        width: 50%;
        border-radius: 40px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        height: 200px;
        width: 100%;
}

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

 

    

`