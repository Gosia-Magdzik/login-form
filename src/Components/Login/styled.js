import styled from "styled-components";
import { motion } from "framer-motion";

export const Input = styled.input`
    border: 1px solid;
    color: gray;
    font-size: 15px;
    height: 45px;
    width: 100%;
    padding: 5px;
    margin-left: 10px;

    @media (max-width: 767px) {
        margin-right: 5px;
        //margin-left: 40px;
        max-width: 100%;
        text-align: center;
    };
    
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;

    @media (max-width: 768px) {
        margin-right: 5px;
        max-width: 100%;
        margin-left: 10px;
        align-items: center;
    };
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 40px;
    border: 1px, solid;
    position: relative;
`;

export const Img = styled.img`
    height: 35px;
    transform: translateY(-5px);
    margin-right: 4px;
`;

export const Button = styled(motion.button)`
	background: #74D36A;
	padding: 1.2em 5em;
	letter-spacing: 0.35em;
	font-size: 0.7em;
    margin: 10px;
    width: 80%;
    height: 50px;
    border-radius: 30px;

    @media (max-width: 767px) {
        max-width: 100%;
        margin-left: 40px;
    };

    &:hover {
        background-color: #C9FFC3;
        transition: transform 0.3s ease;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(1.2);
        transition: transform 0.3s ease;
        background-color: #E7FFE4;
    }
`;

export const ShowPasswordButton = styled.button`
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const SignInInfo = styled.div`
    margin-bottom: 40px;
    word-wrap: break-word;
    color: gray;

    @media (max-width: 767px) {
        margin-bottom: 30px;
    };
    
`;

export const SignLink = styled.a`
    font-weight: bold;
    color: #74D36A;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;

    @media (max-width: 767px) {
        align-items: center
    };
`;


export const ForgotLink = styled.a`
    text-decoration: none;
`;

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 40px;

    @media (max-width: 767px) {
        max-width: 100%;
        margin-left: 10px;
        flex-direction: column;
    };
`;

export const Label = styled.label`
    margin-bottom: 20px;
`;

export const Welcome = styled.h1`
    margin: 30px;

    @media (max-width: 767px) {
        margin-left: 40px;
    };
`;

export const Part1 = styled.div`
        margin: 30px;

        @media (max-width: 767px) {
            margin: 0;
    };
`;

export const Part2 = styled.div`
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 767px) {
            max-width: 80%;
            margin-left: 40px;
        };
`;
