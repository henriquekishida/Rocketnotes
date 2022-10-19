import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiMail, FiLock, FiUser, FiAlertOctagon } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("Fill all the fields")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("User created successfully")
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          FiAlertOctagon(error.response.data.message)
        } else {
          alert("Unable to create account")
        }
      })
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage your useful links</p>

        <h2>Create Account</h2>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

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

        <Button title="Create" onClick={handleSignUp} />

        <Link to="/">
          Log in instead
        </Link>
      </Form>

    </Container>
  )
}