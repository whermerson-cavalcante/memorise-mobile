import React from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FooterOption } from "../../components/FooterOption";

import LogoImg from "../../assets/logo.png";

import {
  Container,
  Content,
  Logo,
  Title,
  FormContainer,
  InputsContainer,
  FooterContainer,
} from "./styles";

export function Register() {
  return (
    <Container>
      <Content>
        <Logo source={LogoImg} />

        <Title>Register</Title>

        <FormContainer>
          <InputsContainer>
            <Input icon="user" name="name" placeholder="Name" />
            <Input icon="user" name="username" placeholder="Username" />
            <Input icon="mail" name="email" placeholder="Email" />
          </InputsContainer>

          <Button title="Proseguir" />
        </FormContainer>
      </Content>

      <FooterContainer>
        <FooterOption title="Login" />
      </FooterContainer>
    </Container>
  );
}
