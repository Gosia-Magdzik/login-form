import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 5px 6px 6px 0px ;
    background-color: #f4fcff;
    border-radius: 20px;
    margin-top: 10%;

    @media (max-width: 768px) {
        height: 100%;
        width: auto;
        margin: 2%;
    };
`;

export const BasisA = styled.div`
    background: rgba(0,170,170,0.5);
    box-shadow: inset 0 0 3em rgba(0,170,170,0.5), 0 0 3em rgba(0,170,170,0.5);
    flex-basis: 30%;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    overflow: hidden;

`;

export const Logo = styled.p`
    color: black;
    padding: 10px;
    border: 1px solid;
    margin: 30px
`;

export const BasisB = styled.div`


`;



