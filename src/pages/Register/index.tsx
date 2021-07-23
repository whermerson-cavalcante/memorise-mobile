import React from 'react';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FooterOption } from '../../components/FooterOption'

import { 
  Container, 
  Logo, 
  Title, 
  FormContainer,
  InputsContainer,
  FooterContainer,
} from './styles';

export function Register() {
  return (
    <Container>
      <Logo />

      <Title>Login</Title>

      <FormContainer>
        <InputsContainer>
          <Input name="email" />
          <Input name="name" />
          <Input name="username" />
        </InputsContainer>

        <Button title="Proseguir" />
      </FormContainer>

      <FooterContainer>
        <FooterOption title="Login" />
      </FooterContainer>
    </Container>
  )
}