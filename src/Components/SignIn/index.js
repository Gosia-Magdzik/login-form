import { useContext, useState } from "react";
import { AccountContext } from "../accountContext";
import { SignLink, SignInInfo, Wrapper, Part2, Button, Img, Input, IconWrapper, ShowPasswordButton } from "../Login/styled";
import fingerprint from "../Images/fingerprint.svg"
import avatar from "../Images/avatar.svg"
import eyeOpen from "../Images/eye_open.svg"
import eyeClose from "../Images/eye_close.svg"


export const SignIn = () => {
    const { switchToSignin } = useContext(AccountContext);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <Wrapper>
            <IconWrapper>
                <Img src={fingerprint}/>
                <Input type={showPassword ? 'text' : 'password'} placeholder="password"/>
                <ShowPasswordButton onClick={toggleShowPassword}>
                <img src={showPassword ? eyeClose : eyeOpen} alt="Toggle Password Visibility"/>
                </ShowPasswordButton>
            </IconWrapper>
            <IconWrapper>
                <Img src={fingerprint}/>
                <Input type={showPassword ? 'text' : 'password'} placeholder="confirm password"/>
                <ShowPasswordButton onClick={toggleShowPassword}>
                <img src={showPassword ? eyeClose : eyeOpen} alt="Toggle Password Visibility"/>
                </ShowPasswordButton>
            </IconWrapper>

            <Part2>
                <Button>SIGN IN</Button>
                <SignInInfo href="#"> Already have an account ? <SignLink onClick={switchToSignin}>Login</SignLink></SignInInfo>
            </Part2>
        </Wrapper>
    );
}