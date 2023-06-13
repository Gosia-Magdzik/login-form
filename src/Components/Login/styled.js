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
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 40px;
    border: 1px, solid;
    
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
	margin: 1em;
    box-shadow: inset 0 0 1em rgba(0,170,170,0.5), 0 0 1em rgba(0,170,170,0.5);
	border: #0dd solid 2px;

    &:hover {
        background-color: #0dd;
		box-shadow: inset 0 0 0 rgba(0,170,170,0.5), 0 0 1.5em rgba(0,170,170,0.7);
    }

`;