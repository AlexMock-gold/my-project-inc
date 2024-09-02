import React from 'react';
import styled from "styled-components"
import photo from "../../logo.svg";
import {Menu} from "../../components/menu/Menu";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo src={photo} />
            <WrapMenu>
                <Menu/>
                <Logo src={photo} />
                <Logo src={photo} />
                <Logo src={photo} />
            </WrapMenu>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    background-color: #d28383;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    height: 50px;
    width: 50px;
`
const WrapMenu = styled.div`
display: flex;
    align-items: center;
`

