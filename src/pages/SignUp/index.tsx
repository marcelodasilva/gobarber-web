import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="GoBarber Logo" />
        <form action="">
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password1"
            type="password"
            placeholder="Senha"
          />
          <Input
            icon={FiLock}
            name="password2"
            type="password"
            placeholder="Confirmar Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </form>
        <Link to="/">
          {' '}
          <FiArrowLeft />
          Voltar para Logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
