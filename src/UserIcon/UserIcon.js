import React from 'react';
import Image from 'react-bootstrap/Image';
import './styles.css';

const UserIcon = ({ iconSrc }) => (
  <React.Fragment>
    <Image
      src={iconSrc}
      className="icon-user"
      alt="user-icon"
      roundedCircle
      />
  </React.Fragment>
)

export default UserIcon;
