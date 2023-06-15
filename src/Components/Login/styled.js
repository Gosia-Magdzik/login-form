import styled from "styled-components";
import { motion } from "framer-motion";

export const Input = styled.input`
    border: 1px solid;
    color: gray;
    font-size: 15px;
    height: 45px;
    width: 100%;
    padding: 5px;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;

    @media (max-width: 768px) {
        margin-right: 5px;
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
    margin: 40px;
    width: 80%;
    height: 50px;
    border-radius: 30px;

    &:hover {
        background-color: #C9FFC3;
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
`;


export const ForgotLink = styled.a`
    text-decoration: none;
`;

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 40px;
`;

export const Label = styled.label`
    margin-bottom: 20px;
`;

export const Welcome = styled.h1`
    margin: 30px;
`;

export const Part1 = styled.div`
        margin: 30px;
`;

export const Part2 = styled.div`
        margin-bottom: 40px;
`;
