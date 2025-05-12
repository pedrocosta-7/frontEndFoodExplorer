import { Container, Form } from "./styles";
import { Title } from "../../components/title";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({email, password});
  }

  function handleClick() {
    navigate("/signUp");
  }

  return (
    <Container>
      <Title />
      <Form>
        <h2>Faça login</h2>
        <Input
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          label="Senha" 
          placeholder="No mínimo 6 caracteres"
          type="password" 
          onChange={e=>setPassword(e.target.value)}/>
        <Button heightOfButton="48px" title="Entrar" onClick={handleSignIn} type="button"/>
        <ButtonText title="Criar uma conta" onClick={handleClick} />
      </Form>
    </Container>
  );
}
