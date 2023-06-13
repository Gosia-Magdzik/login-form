import { Input, InputWrapper, IconWrapper, Img, Button } from "./styled";
import fingerprint from "../Images/fingerprint.svg"
import avatar from "../Images/avatar.svg"

export const Login = () => {
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
                    <Input type="password" placeholder="password"/>
                </IconWrapper>
            </InputWrapper>
            <Button>LOG IN</Button>
        </>
    );
}