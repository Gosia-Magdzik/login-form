import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 5px 6px 6px 0px ;
    background-color: #f4fcff;
    border-radius: 20px;
    margin-top: 10%;
    position: relative;

    @media (max-width: 768px) {
        height: 100%;
        width: auto;
        margin: 2%;
    };
`;

export const BasisA = styled.div`
    background: #00aaaa80;
    box-shadow: inset 0 0 3em #00aaaa80, 0 0 3em #00aaaa80;
    flex-basis: 30%;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;`;

export const Logo = styled.p`
    color: black;
    padding: 10px;
    border: 1px solid;
    margin: 30px;
`;

export const BasisB = styled(motion.div)`
    background: none;
`;



