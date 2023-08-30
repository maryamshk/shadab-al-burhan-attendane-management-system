import React from "react";
import styled from "styled-components";

const Welcome = () => {
    return (
        <Container>
            <Header>
                <img src="../images/logo.png"></img>
                <h1>Marhaba Bika Burhan</h1>
            </Header>

            <h3>Empowering Education and Park Management</h3>
            <p>
                Shabab Al Burhan is more than just a program; it is a manifestation of
                our commitment to the Islamic way of life.
            </p>

            <p>
                We believe in the power of education and the importance of nurturing a
                profound connection with the natural world, all in accordance with the
                teachings of Islam.
            </p>

            <ButtonContainer>
                <button>
                    I am the Teacher <span>(معلم)</span>
                </button>
                <button>
                    I am the Head of park <span>(رئيس الحدائق)</span>
                </button>
            </ButtonContainer>

        </Container>


    );
};

const Container = styled.div`
  padding: 0px;

  /* Set opacity for the background image */
  ::before {
    background-image: linear-gradient(
        rgba(29, 173, 155, 0.2),
        rgba(29, 173, 155, 0.3)
      ),
      url("../images/img3.jpg");

    //   background-image: linear-gradient(112.1deg, rgba(32, 38, 57, 0.6) 11.4%, rgba(63, 76, 119, 0.5) 70.2%), url('../images/img3.jpg');
    background-size: cover;
    content: "";
    opacity: 0.1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  h3 {
    color: #9bf4d5;
    margin-top: 7rem;
    margin-left: 1.5rem;
    font-weight: 500;
    font-family: "Playfair Display", serif;
  }

  p {
    width: 25rem;
    margin-left: 1.5rem;
    color: #ececec;
  }
`;

const Header = styled.header`
  display: flex;

  img {
    position: absolute;
    width: 190px;
    height: 190px;
    left: -12px;
    top: -18px;
  }

  h1 {
    font-family: "Dancing Script", cursive;
    font-weight: lighter;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2.3rem;
    color: #9bf4d5;
  }
`;

const ButtonContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center; 
margin-top:1rem;

button{
    width:20%;
    padding:14px 0;
    margin-top:2rem;
    border-radius:20px;
    background-color:#9bf4d5;
    color:#1dad9b;
    border:none;
 

    &:hover{
        cursor:pointer;
        background-color:#9fd3c7;
        color:white;
    }

`;

export default Welcome;
