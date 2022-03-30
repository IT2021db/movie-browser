import styled from "styled-components";

export const Header1 = styled.div`
    max-width: 1920px;
    height:770px;
    margin: auto;
    background-color: ${({ theme }) => theme.color.black}
`;

export const Header2=styled.header`
    max-width: 1920px;
    height: 94px;
    background-color: ${({ theme }) => theme.color.black}      
`;

export const Poster = styled.img`
   text-align: left;
    height: 769px;
`;