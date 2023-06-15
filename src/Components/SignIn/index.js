import { useContext, useState } from "react";
import { AccountContext } from "../accountContext";
import { SignLink, Wrapper, Button, Img, Input, ShowPasswordButton, InputWrapper, Part1, Part2 } from "../Login/styled";
import { IconWrapper, Welcome, SignInInfo } from "./styled";
import fingerprint from "../Images/fingerprint.svg";
import avatar from "../Images/avatar.svg";
import eyeOpen from "../Images/eye_open.svg";
import eyeClose from "../Images/eye_close.svg";
import email from "../Images/email.svg";
import phone from "../Images/phone.svg";


export const SignIn = () => {
    const { switchToSignin } = useContext(AccountContext);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <Wrapper>
            <Welcome>Register</Welcome>
            <Part1>
                <InputWrapper>
                    <IconWrapper>
                        <Img src={avatar} />
                        <Input type="text" placeholder="username"/>
                    </IconWrapper>
                    <IconWrapper>
                        <Img src={email} />
                        <Input type="email" placeholder="email address"/>
                    </IconWrapper>
                    <IconWrapper>
                        <Img src={phone} />
                        <Input type="phone" placeholder="phone"/>
                    </IconWrapper>
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
                </InputWrapper>
            </Part1>
            <Part2>
                <Button>SIGN IN</Button>
                <SignInInfo href="#"> Already have an account ? <SignLink onClick={switchToSignin}>Login</SignLink></SignInInfo>
            </Part2>
        </Wrapper>
    );
}