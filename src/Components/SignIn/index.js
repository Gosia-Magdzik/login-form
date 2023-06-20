import { useContext, useState } from "react";
import validator from "validator";
import { AccountContext } from "../accountContext";
import { SignLink, Wrapper, Button, Img, Input, ShowPasswordButton, InputWrapper, Part1, Part2 } from "../Login/styled";
import { IconWrapper, Welcome, SignInInfo, Info, InfoWrapper } from "./styled";
import fingerprint from "../Images/fingerprint.svg";
import avatar from "../Images/avatar.svg";
import eyeOpen from "../Images/eye_open.svg";
import eyeClose from "../Images/eye_close.svg";
import envelope from "../Images/email.svg";
import phone from "../Images/phone.svg";


export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [isVaildEmail, setIsValidEmail] = useState(true);
    
    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsValidEmail(validator.isEmail(newEmail));
    };

    const [tel, setTel] = useState('');
    const [isValidTel, setIsValidTel] = useState(true);
    
    const handleTelChange = (event) => {
        const newTel = event.target.value;
        setTel(newTel);
        setIsValidTel(validator.isMobilePhone(newTel));
    };


    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);

    const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsValidPassword(validatePassword(newPassword))
    };

    const validatePassword = (password) => {
        const isLongEnough = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
    
        return isLongEnough && hasUppercase;
    };

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
                        <Img src={envelope} />
                        <InfoWrapper>
                            <Input type="email" value={email} onChange={handleEmailChange} placeholder="email address"/>
                            {isVaildEmail ? null : <Info> ⬆ Please enter correct email address</Info>}
                        </InfoWrapper>
                    </IconWrapper>
                    <IconWrapper>
                        <Img src={phone} />
                        <InfoWrapper>
                            <Input type="phone" value={tel} onChange={handleTelChange} placeholder="phone"/>
                            {isValidTel ? null : <Info>⬆ Please enter mobile phone number</Info>}
                        </InfoWrapper>
                    </IconWrapper>
                    <IconWrapper>
                        <Img src={fingerprint}/>
                        <InfoWrapper>
                            <Input type={showPassword ? 'text' : 'password'} placeholder="password" id={password} name="password" value={password} onChange={handlePasswordChange}/>
                            <ShowPasswordButton onClick={toggleShowPassword}>
                            <img src={showPassword ? eyeClose : eyeOpen} alt="Toggle Password Visibility"/>
                            </ShowPasswordButton>
                            {!isValidPassword && <Info>password should contain at least 8 characters & one uppercase</Info>}
                        </InfoWrapper>
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