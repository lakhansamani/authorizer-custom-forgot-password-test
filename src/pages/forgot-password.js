import { useAuthorizer, AuthorizerForgotPassword } from "@authorizerdev/authorizer-react";

export default function ForgotPassword() {
  const {authorizerRef} = useAuthorizer()


  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.elements['email'].value;
    try {
      const res = await authorizerRef.forgotPassword({
        email,
        redirect_uri: 'http://localhost:3000/reset-password'
      })

      console.log({res})
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email"/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
