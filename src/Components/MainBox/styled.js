import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 5px 6px 6px 0px ;
    width: 400px;
    height: 600px;
    background-color: #f4fcff;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 10%;

    @media (max-width: 768px) {
        //height: 100%;
        width: 90%;
        margin-top: 0%;

    };
`;

export const BasisA = styled.div`
    background: rgba(0,170,170,0.5);
    box-shadow: inset 0 0 3em rgba(0,170,170,0.5), 0 0 3em rgba(0,170,170,0.5);
    border-radius: 50%;
    flex-basis: 30%;
    transform: translate(-35%, -5%);
    height: 110%;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    overflow: hidden;

`;

export const Logo = styled.p`
    //z-index: 10;
    color: black;
    padding: 10px;
    border: 1px solid;
    margin: 10px;
`;

export const BasisB = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;



