import styled from "styled-components";




export const PersonTile = styled.article`
    width: 208px;
    height: 339px;
    background: ${({ theme }) => theme.color.white};
    padding:16px;
    display: flex;
   flex-direction: column;
    text-align: center;
    margin: 8px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
`;

export const PersonImage = styled.img`
    width:177px;
    height: 264px;
    border-radius: 5px;
`;
export const PersonName = styled.header`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    margin: 8px 0;
`;
export const PersonRole = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.color.waterloo};
    text-align: center;
    margin-top: 8px;
`;