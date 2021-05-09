/**
 *
 * Avatar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import CodeJediPoster from '../../images/AlexCodeJedi.png';
import CodeJedi from '../../images/AlexCodeJedi.mp4';

import messages from './messages';

function Avatar() {
  return (
    <div>
      {!CodeJediPoster || !CodeJedi ? (
        <div>AT</div>
      ) : (
        <video autoPlay loop muted poster={CodeJediPoster}>
          <source src={clip} type="video/mp4" />
          <source src={clip} type="video/ogg" />
        </video>
      )}
    </div>
  );
}

Avatar.propTypes = {};

export default memo(Avatar);
