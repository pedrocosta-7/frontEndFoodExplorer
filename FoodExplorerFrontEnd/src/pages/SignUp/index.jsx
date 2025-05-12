import { Container, Form } from "./styles";
import { Title } from "../../components/title";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    navigate("/");
  }

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("preencha todos os campos");
    }

    api.post("/users", { name, email, password })
      .then(async () => {
        await alert("usuário cadastrado com sucesso");
        navigate("/");
        
      })
      .catch((error) => {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("Usuário não foi cadastrado");
        }
      });
  }

  return (
    <Container>
      <Title />
      <Form>
        <h2>Crie sua conta</h2>
        <Input
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          type="text"
          onChange={e => setName(e.target.value)}
        />
        <Input
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={e => setEmail(e.target.value)}
          type="text"

        />
        <Input
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
          type="password"

        />
        <Button
          heightOfButton="48px"
          title="Criar conta"
          onClick={handleSignUp}
        />
        <ButtonText title="Já tenho uma conta" onClick={handleClick} />
      </Form>
    </Container>
  );
}
