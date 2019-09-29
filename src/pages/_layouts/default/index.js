import React from 'react';
import PropTypes from 'prop-types';

import Heander from '~/components/Header';

import {Wrapper} from './styles';

export default function DefaultLayout({children}) {
  return (
    <Wrapper>
      <Heander />
      {children}
    </Wrapper>
  );
}

DefaultLayout.protoTypes = {
  children: PropTypes.element.isRequired,
};
