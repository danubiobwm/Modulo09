import React from 'react';
import {Link} from 'react-router-dom';

import Notifications from '~/components/Notifications';
import logo from '~/assets/logorx.svg';

import {Container, Content, Profile} from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              Danubio
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.pngCop"
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
