import styled from "styled-components";

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    //align-items: flex-end;
    margin-bottom: 25px;
    border: 1px, solid;
    position: relative;

    @media (max-width: 767px) {
        margin-bottom: 15px;

    };
`;

export const Welcome = styled.h1`
    margin: 30px 0px 0px 30px;

    @media (max-width: 767px) {
        margin: 10px 0px 20px 0px;
    };
`;

export const Part2 = styled.div`
        margin-bottom: 40px;

    @media (max-width: 767px) {
        margin-bottom: 10px;
    };
`;

export const Button = styled.button`
	background: #74D36A;
	padding: 1.2em 5em;
	letter-spacing: 0.35em;
	font-size: 0.7em;
    margin: 40px;
    width: 80%;
    height: 50px;
    border-radius: 30px;

    @media (max-width: 767px) {
        max-width: 100%;
        margin: 0;
        width: 100%;

    };

    &:hover {
        background-color: #C9FFC3;
    };

    &:active {
        transform: scale(1.2);
        transition: transform 0.3s ease;
        background-color: #E7FFE4;
    }
`;

export const SignInInfo = styled.div`
    margin-bottom: 40px;
    word-wrap: break-word;
    color: gray;

    @media (max-width: 767px) {
        margin-bottom: 10px;
    };
    
`;