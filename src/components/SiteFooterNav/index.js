import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const SiteFooterNav = (props) => (
  <nav className="footer-nav">
	<Placeholder name="jss-site-footer-nav" rendering={props.rendering} />
  </nav>
);

export default SiteFooterNav;