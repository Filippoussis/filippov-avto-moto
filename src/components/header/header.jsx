import React from 'react';
import Logo from './logo/logo';
import SiteMenu from './site-menu/site-menu';

import './header.scss';

function Header() {
  return (
    <header className="page-header">
      <Logo />
      <SiteMenu />
    </header>
  );
}

export default Header;