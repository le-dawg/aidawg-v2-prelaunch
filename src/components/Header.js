import React from 'react';

import config from '../../config';
import LogoImg from '../assets/img/aidawglogov2.svg';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <object type="image/svg+xml" data={LogoImg} class="logo"></object>
      <p>{config.subHeading}</p>
    </header>
  );
}
