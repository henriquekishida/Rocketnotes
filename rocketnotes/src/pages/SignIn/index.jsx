import { useState } from "react";

import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  const[email, setEmail] = useState("")
  const[passowrd, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, passowrd })
  }
  
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage your useful links</p>

        <h2>Log in</h2>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Log in" onClick={handleSignIn} />     

        <Link to="/register">
          Create Account
        </Link>     
      </Form>

      <Background />
    </Container>
  )
}