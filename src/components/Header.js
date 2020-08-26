import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <object type="image/svg+xml" data="../assets/img/aidawglogov2.svg" class="logo"></object>
      <p>{config.subHeading}</p>
    </header>
  );
}
