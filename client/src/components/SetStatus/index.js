import axios from "axios";
import React, { useState, useEffect } from "react";
import {
    Background,
    Container,
    CloseButton,
    CloseSymbol,
    Form,
    InputContainer,
    Input,
    InputButton,
    InputSubmit,
    Error,
} from "./element";

const SetStatus = ({ hidden, setHidden }) => {
    const [status, setStatus] = useState("status");
    const [username, setUsername] = useState("ユーザー名");
    const [password, setPassword] = useState("パスワード");

    const [hiddenLogin, setHiddenLogin] = useState(false);
    const [hiddenError, setHiddenError] = useState(true);
    const [hiddenStatus, setHiddenStatus] = useState(true);

    useEffect(() => {
        localStorage.setItem("login", false);
        const getStatus = async () => {
            const res = await axios.get("/status");
            setStatus(res.data);
        };
        getStatus();
    }, []);

    const statusChanged = (e) => {
        setStatus(e.target.value);
    };

    const usernameChanged = (e) => {
        setUsername(e.target.value);
    };

    const passwordChanged = (e) => {
        setPassword(e.target.value);
    };

    const Login = (e) => {
        e.preventDefault();
        if (username === "h" && password === "h") {
            localStorage.setItem("login", "dobahungdalamtrangwebnay20211212");
            setHiddenError(true);
            setHiddenLogin(true);
            setHiddenStatus(false);
        } else {
            setHiddenError(false);
            setHiddenLogin(false);
            setHiddenStatus(true);
        }
    };

    const Submitted = (e) => {
        e.preventDefault();
        var login = localStorage.getItem("login");
        if (login === "dobahungdalamtrangwebnay20211212") {
            axios
                .post("/status", null, {
                    params: {
                        content: status,
                    },
                })
                .then((res) => {
                    setHiddenError(true);
                    setHiddenLogin(false);
                    setHiddenStatus(true);
                    setHidden(true);
                    localStorage.removeItem("login");
                })
                .catch((err) => console.warn(err));
        } else {
            console.log("must to login");
        }
    };

    return (
        <Background hidden={hidden}>
            <Container hidden={hiddenLogin}>
                <Form onSubmit={Login}>
                    <InputContainer>
                        <label>ユーザー名:</label>
                        <Input
                            type="text"
                            value={username}
                            onChange={usernameChanged}
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>パスワード:</label>
                        <Input
                            type="password"
                            value={password}
                            onChange={passwordChanged}
                        />
                    </InputContainer>
                    <InputButton>
                        <InputSubmit type="submit" value="確認" />
                    </InputButton>
                </Form>
            </Container>

            <Container hidden={hiddenError}>
                <Error>Error</Error>
            </Container>

            <Container hidden={hiddenStatus}>
                <Form onSubmit={Submitted}>
                    <InputContainer>
                        <label>表示内容:</label>
                    </InputContainer>
                    <InputContainer>
                        <Input
                            type="text"
                            value={status}
                            onChange={statusChanged}
                        />
                    </InputContainer>
                    <InputButton>
                        <InputSubmit type="submit" value="確認" />
                    </InputButton>
                </Form>
            </Container>
            <CloseButton>
                <CloseSymbol onClick={() => setHidden(true)}>
                    &#10006;
                </CloseSymbol>
            </CloseButton>
        </Background>
    );
};

export default SetStatus;
