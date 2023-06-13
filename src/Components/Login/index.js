import { Input, InputWrapper, IconWrapper, Img, Button, ShowPasswordButton, SignInInfo, Wrapper, Part1, Part2, ForgotLink, LabelWrapper } from "./styled";
import fingerprint from "../Images/fingerprint.svg"
import avatar from "../Images/avatar.svg"
import { useState } from "react";
import eyeOpen from "../Images/eye_open.svg"
import eyeClose from "../Images/eye_close.svg"

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <>
        <Wrapper>
            <Part1>
                <h1>Hello User!</h1>
                <br/><br/><br/>
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
                        <label><input type="checkbox" /> &nbsp; Remember Me &nbsp; |</label>
                        <ForgotLink href="#">forgot password ?</ForgotLink>
                    </LabelWrapper>
                </InputWrapper>
            </Part1>
            <Part2>
                <Button>LOG IN</Button>
                <SignInInfo>Don't have an account yet? Sign Up</SignInInfo>
            </Part2>
        </Wrapper>
        </>
    );
}