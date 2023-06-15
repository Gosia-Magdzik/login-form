import { useContext, useState } from "react";
import { Input, InputWrapper, IconWrapper, Img, Button, ShowPasswordButton, SignInInfo, Wrapper, ForgotLink, LabelWrapper, Label, Welcome, SignLink, Part1, Part2 } from "./styled";
import fingerprint from "../Images/fingerprint.svg"
import avatar from "../Images/avatar.svg"
import eyeOpen from "../Images/eye_open.svg"
import eyeClose from "../Images/eye_close.svg"
import { AccountContext } from "../accountContext";

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword)

    const { switchToSignup } = useContext(AccountContext)

    return (
        <>
        <Wrapper>
                <Welcome>Hello User!</Welcome><br/>
                <Part1>
                <InputWrapper>
                    <IconWrapper>
                        <Img src={avatar} />
                        <Input type="text" placeholder="username"/>
                    </IconWrapper>
                    <IconWrapper>
                        <Img src={fingerprint}/>
                        <Input type={showPassword ? 'text' : 'password'} placeholder="password"/>
                        <ShowPasswordButton onClick={toggleShowPassword}>
                            <img src={showPassword ? eyeClose : eyeOpen} alt="Toggle Password Visibility"/>
                        </ShowPasswordButton>
                    </IconWrapper>
                    <LabelWrapper>
                        <Label><input type="checkbox" /> &nbsp; Remember Me &nbsp; </Label>
                        <ForgotLink href="#">forgot password ?</ForgotLink>
                    </LabelWrapper>
                </InputWrapper>
                </Part1>
                <Part2>
                    <Button 
                    whileHover={{    
                               transition: { type: "spring", stiffness: 200, damping: 5 } } }
>LOG IN</Button>
                    <SignInInfo href="#">Don't have an account yet? <SignLink onClick={switchToSignup}>Sign Up</SignLink></SignInInfo>
                </Part2>
        </Wrapper>
        </>
    );
}