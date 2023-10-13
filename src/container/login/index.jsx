import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/login-form";
import { LoginAndRegisterArea, LoginAndRegisterContent } from "./style";
import { useForm } from "../../hooks/useForm";
import * as Auth from "../../api/Auth";
import { navigate } from "gatsby";
import { authorize } from "../../api/Auth";

const Login = () => {

    return (
        <LoginAndRegisterArea>
            <Container>
                <Row>
                    <Col lg={6} className="m-auto">
                        <LoginAndRegisterContent>
                            <div className="login-header mb-40">
                                <h3>Log In Your Account</h3>
                            </div>

                            <LoginForm />
                        </LoginAndRegisterContent>
                    </Col>
                </Row>
            </Container>
        </LoginAndRegisterArea>
    );
};

export default Login;
