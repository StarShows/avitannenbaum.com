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


import { HeaderComp, Left, Center, Right} from './HeaderStyles';
function Header(props) {
  const { title } = props;

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
