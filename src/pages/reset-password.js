import { AuthorizerResetPassword } from "@authorizerdev/authorizer-react";

export default function ResetPassword() {
    return (
        <AuthorizerResetPassword onReset={() => {
            window.location.href="/"
        }}/>
    )
}