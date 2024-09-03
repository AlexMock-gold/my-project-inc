import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/50353683-1.webp";

export const Main = () => {
    return (
        <StyledMain>
            <MainText>
                <span>Hi 👋,</span>
                <span>My name is</span>
                <Name>Pavan MG</Name>
                <MainTitle>I build things for web</MainTitle>
            </MainText>
            <MainPhoto src={photo}/>
        </StyledMain>
    );
};

const StyledMain  = styled.section`
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: #7070af;
`
const MainTitle = styled.h1`

`
const MainText = styled.div`

`
const Name = styled.span`

`
const MainPhoto = styled.img`
    height: 349px;
    width: 349px;
`

