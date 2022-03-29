import styled from "styled-components";

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns:auto 1fr;
    grid-gap: 40px;
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;
`;

export const Content = styled.div`

`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
`;

export const Year = styled.div`
    font-size: 22px;
`;

export const Tags = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap ;
    padding-left: 0;
    margin: 0 -8px;
`;

export const Tag = styled.li`
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
`;
export const Description = styled.p`
    font-size: 20px;
    margin: 24px 0 0 0;
    line-height: 1.6;
`;