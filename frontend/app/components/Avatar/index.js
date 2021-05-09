/**
 *
 * Avatar
 *
 */

import React, { memo, useState, Link } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import CodeJediPoster from '../../images/AlexCodeJedi.png';
import CodeJedi from '../../images/AlexCodeJedi.mp4';

import styled from 'styled-components';

const Avatar = () => {
  const Video = styled.video`
  .avatar_image{
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    height: auto;
    width: auto;
    max-width: 250px;
    padding: 18px;
    border-radius: 50%;
    border: solid 6px #ffe81f;
    box-shadow: 000000 0px 0px 27px 3px;
    color: #000000;
  }
  
  `;

  const Link = styled.Link`

  `;

  const AvatarWrapper = styled.div``;
  const Title = styled.div`
  &.title {
    color: blue;
   
  }
  `
;


  const [textState, setText] = useState(false);
  const hovered = textState ? { backgroundColor: "#333", color: "#fff" } : {};

  return (
    <div className="avatar">
    <Link href="https://www.linkedin.com/in/starshowsstudios/" target="_blank" 
        tabindex="0" title="Click here to go to Alex (Avi) Tannenbaum's Linkedin profile"
        accesskey="l">
        <Video className={`avatar_image video`} width={"100%"} loop={"true"} autoplay={"true"} muted={"true"}
            poster={CodeJediPoster}>
            <source src={CodeJedi} type={"video/mp4"}>
            Your browser doesn't support HTML5 video tag.
        </Video>
        {/* <!-- <img class="avatar_image" src="images/avitannenbaum.jpeg" alt="Avi (Alex) Tannenbaum Profile Image"> --> */}
    </Link>
</div>
{/*
    // <div>
    //   {!CodeJediPoster || !CodeJedi ? (
    //     <div>AT</div>
    //   ) : (

        
    //     <AvatarWrapper 

    //       onMouseOver={() => {
    //         setText(true)
    //       }}  
    //       onMouseOut={() => {setText(false)}}        
    //       >
    //       <Video autoPlay loop muted poster={CodeJediPoster}>
    //         <source src={CodeJedi} type="video/mp4" />
    //         <source src={CodeJedi} type="video/ogg" />
    //       </Video>
          
    //        <Title className={`title ${textState ? 'hover' : ''}`}>Go to my linked in</Title> 
    //     </AvatarWrapper>
    //   )}
  // </div> */}
  );
};

Avatar.propTypes = {};

export default memo(Avatar);
