import styled from "styled-components";

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

export const Button = styled.button`
    color: black;
	background: none;
	border-radius: 0;
	padding: 1.2em 5em;
	letter-spacing: 0.35em;
	font-size: 0.7em;
	transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
    box-shadow: inset 0 0 1em rgba(0,170,170,0.5), 0 0 1em rgba(0,170,170,0.5);
	border: #0dd solid 2px;
    margin: 40px;
    width: 300px;


    &:hover {
        filter: brightness(1.05);
        transform: scale(1.1);
        transition: transform 0.3s ease;
        background-color: #0dd;
		box-shadow: inset 0 0 0 rgba(0,170,170,0.5), 0 0 1.5em rgba(0,170,170,0.7);
    }

    &:active {
        transform: scale(1.2);
        transition: transform 0.3s ease;
        background-color: #0dd;
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
    margin: 15px;
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const Part1 = styled.div`
    margin: 15px;
`;

export const Part2 = styled.div`
    margin: 15px;
`;

export const ForgotLink = styled.a`
    text-decoration: none;
`;

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 10px 0px 20px;
`;

