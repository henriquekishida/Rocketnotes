import { useState } from 'react'
import { Background, Container, Form } from './styles'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'


import { Input } from '../../components/Input'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Fill every field")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("You have successfully registered")
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Unable to register")
        }
      })
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage useful links.</p>

        <h2>Create account</h2>

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

        <Button title="Register account" onClick={handleSignUp} />

        <Link to="/"> Log in instead</Link>

      </Form>
    </Container>
  )
}