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
    width: 700px;
    height: 85vh;

    @media (max-width: 767px) {
        height: 100vh;
        width: 90vh;
        margin-top: 0;
        box-shadow: none ;
        flex-direction: column;
    };
`;

export const BasisA = styled.div`
    flex-basis: 60%;
    display: flex;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    flex-grow: 1;

    @media (max-width: 767px) {
        overflow: hidden;
    }
    `;

export const BasisB = styled(motion.div)`
    background: none;
`;



