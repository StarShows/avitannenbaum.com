/**
 *
 * Header
 *
 */

import React, { memo } from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Menu from '../Menu';
import Avatar from '../Avatar';

import styled from 'styled-components';

import { HeaderComp, Left, Center, Right} from './HeaderStyles';
function Header(props) {
  const { title } = props;
  // Header component
  // const Header = styled.div`
  //   display: grid;
  //   grid-template-columns: auto auto auto;
  //   grid-template-rows: auto;
  //   grid-template-areas: 'header header header';
  //   background: springgreen;
  //   height: 50px;
  //   align-items: center;
  // `;
  // Header Left
  const Left = styled.div`
    justify-self: left;
  `;
  // Header Center
  const Center = styled.div`
    justify-self: center;
  `;
  // Header Right

  const Right = styled.div`
    justify-self: end;
  `;
  return (
    <HeaderComp>
      <Left>{title}</Left>
      <Center>
        <Avatar />
      </Center>
      <Right>
        <Menu />
      </Right>
    </HeaderComp>
  );
}

Header.propTypes = {
  title: String,
};

export default memo(Header);
