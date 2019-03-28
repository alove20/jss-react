import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const SiteFooterNavSection = (props) => (
	<div className="footer-nav__section">
		<h3 className="footer-nav__heading"><Text field={props.fields.heading} /></h3>
		<ul className="footer-nav__list">
			<Placeholder name="jss-footer-nav-section-links"  rendering={props.rendering} />
		</ul>
	</div>

);

export default SiteFooterNavSection;
