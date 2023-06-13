import { Input, InputWrapper, IconWrapper, Img, Button, ShowPasswordButton } from "./styled";
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
            <h1>Hello User!</h1>
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
            </InputWrapper>
            <Button>LOG IN</Button>
            <p>Don't have an account yet? Sign Up</p>
        </>
    );
}