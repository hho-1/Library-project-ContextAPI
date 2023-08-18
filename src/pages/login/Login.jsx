import React from 'react'
import { FormContainer, LoginContainer, LoginHeading, StyledButton, StyledForm, StyledInput } from './Login.style'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const {setUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      setUser(true)
      navigate(-1)
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <LoginHeading>Login Here</LoginHeading>
          <StyledInput type='text' placeholder='Username' required/>
          <StyledInput type='password' placeholder='Password' required/>
          <StyledButton type='submit'>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login