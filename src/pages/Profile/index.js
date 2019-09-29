import React from 'react';
import {useSelector} from 'react-redux';
import {Form, Input} from '@rocketseat/unform';

import {Container} from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="Seu E-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha Atual"
        />
        <Input type="password" name="Password" placeholder=" Nova Senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <button type="submit"> Atualizar Perfil</button>
      </Form>
      <button type="button"> Sair do Gobarber </button>
    </Container>
  );
}
