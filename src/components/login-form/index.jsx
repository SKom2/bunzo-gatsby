import React from "react";
import { Link, navigate } from "gatsby";
import Button from "../../components/shared/button";
import {
    Form,
    Input,
    RememberForgetWrap,
    RememberWrap,
    CheckboxInput,
    DescCheck,
    ButtonBox,
    MemberRegister,
    PageLinkDec,
} from "./style";
import { useForm } from "../../hooks/useForm";
import * as Auth from "../../api/Auth";

const LoginForm = () => {
    const { values, handleChange, errors, isValid } = useForm({
        email: "",
        password: "",
    });

    function loginUser(e) {
        e.preventDefault();
        if (isValid) {
            Auth.authorize(values.password, values.email)
                .then((res) => {
                    navigate("/");
                    console.log("vse ok");
                })
                .catch(() => {
                    console.log("something went wrong");
                });
        }
    }

    return (
        <Form action="#" onSubmit={loginUser}>
            <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={values.email || ""}
                onChange={handleChange}
            />
            <Input
                name="password"
                type="password"
                placeholder="Password"
                value={values.password || ""}
                onChange={handleChange}
            />
            <RememberForgetWrap>
                <RememberWrap>
                    <CheckboxInput type="checkbox" />
                    <DescCheck>Remember</DescCheck>
                </RememberWrap>
                <a href="/">Forgot your password?</a>
            </RememberForgetWrap>
            <ButtonBox>
                <Button type="submit" size="large" shape="rounded-10">
                    Log in
                </Button>
            </ButtonBox>
            <MemberRegister>
                <PageLinkDec>
                    {" "}
                    Not a member? <Link to="/register"> Register now</Link>
                </PageLinkDec>
            </MemberRegister>
        </Form>
    );
};

export default LoginForm;
