import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber Logo" />
        <form action="">
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name="email" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="teste"> Esqueci minha senha </a>
        </form>
        <Link to="/register">
          {' '}
          <FiLogIn />
          Criar Conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
