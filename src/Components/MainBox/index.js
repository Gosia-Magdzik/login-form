import { Wrapper, BasisA, BasisB, Logo } from "./styled";
import { Login } from "../Login";

export const MainBox = () => {
    return (
    <>
        <Wrapper>
                <BasisA>
                    <Logo>Logo</Logo>
                </BasisA>
                <BasisB>
                    <Login/> 
                </BasisB>
        </Wrapper>
    </>
    );
};