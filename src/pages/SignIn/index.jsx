import { useState } from 'react'

import { Background, Container, Form } from './styles'

import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'

export function SignIn(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }
  

  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage useful links.</p>

        <h2>Log In</h2>

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

        <Button title="Enter" onClick={handleSignIn} />

        <Link to="/register"> Create account</Link>

      </Form>
      <Background />
    </Container>
  )
}