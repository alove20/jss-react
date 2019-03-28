import React from 'react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

const SiteFooterNavSectionLink = (props) => (
	<li className="footer-nav__item">
		<Link field={props.fields.link} className="footer-nav__link" />
	</li>
);

export default SiteFooterNavSectionLink;
