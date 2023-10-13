import React, { useState } from "react";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as constants from "../../utils/constants";

const RegisterForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [attentionMessage, setAttentionMessage] = useState("");
    const { values, handleChange, isValid } = useForm({
        username: "",
        email: "",
        password: "",
    });

    const notify = (text) => {
        toast(text);
    };

    function registerUser(e) {
        e.preventDefault();
        if (isValid) {
            Auth.register(values.username, values.password, values.email)
                .then((res) => {
                    navigate("/");
                })
                .catch((err) => {
                    notify(constants.userAttentionMessages.errorInUserRegister);
                });
        }
    }

    return (
        <Form onSubmit={registerUser} action="#">
            <Input
                name="username"
                type="text"
                placeholder="Username"
                value={values.username || ""}
                onChange={handleChange}
            />
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
                    <CheckboxInput
                        type="checkbox"
                        onClick={() => setIsChecked(!isChecked)}
                    />
                    <DescCheck>
                        Agree to the <a href="/">Terms and Conditions</a>
                    </DescCheck>
                </RememberWrap>
            </RememberForgetWrap>
            <ButtonBox>
                <Button
                    sx={{
                        "&:disabled": {
                            opacity: 0.5,
                            cursor: "initial",
                        },
                        "&:disabled, &:hover": {
                            color: "black !important",
                        },
                    }}
                    type="submit"
                    size="large"
                    shape="rounded-10"
                    disabled={!isChecked}
                >
                    Register Now
                </Button>
            </ButtonBox>
            <MemberRegister>
                <PageLinkDec>
                    {" "}
                    A member? <Link to="/login"> Log in now</Link>
                </PageLinkDec>
            </MemberRegister>
            <ToastContainer />
        </Form>
    );
};

export default RegisterForm;
