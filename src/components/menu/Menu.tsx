import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Tech Stack</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Content</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 20px;
    }
`

