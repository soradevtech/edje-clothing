import React from "react";

import { TestLoginContainer, TestLoginMessage } from "./test-login.styles";

const TestLogin = () => (
    <TestLoginContainer>
        <TestLoginMessage>Test login available!</TestLoginMessage>
        <TestLoginMessage>email: tester@gmail.com password: cheesecake</TestLoginMessage>
    </TestLoginContainer>
);

export default TestLogin;
