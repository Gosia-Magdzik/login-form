import { Wrapper, BasisA, BasisB, Logo } from "./styled";
import { Login } from "../Login";
import { useState } from "react";
import { SignIn } from "../SignIn";
import { AccountContext } from "../accountContext";

const Variants = {
   expanded: {
    opacity: "0.08",
    rotate: 180,
    transition: {
        duration: 0.5
      }
   },
}


export const MainBox = () => {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, 1000)
    }

    const switchToSignup = () => {
        playAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400)
    }

    const switchToSignin = () => {
        playAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400)
    }

    const contextValue = { switchToSignup, switchToSignin };

    return (
        <>
        <Wrapper>
                <BasisA>
                    <Logo>Logo</Logo>
                </BasisA>
        <AccountContext.Provider value={contextValue}>        
                <BasisB 
                    initial={false}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={Variants}
                >
                    {active === "signin" && <Login/>}
                    {active === "signup" && <SignIn/>}
                </BasisB>
        </AccountContext.Provider>
        </Wrapper>
        </>
    );
};