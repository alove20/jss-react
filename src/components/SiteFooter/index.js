import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '@sitecore-jss/sitecore-jss-react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const SiteFooter = (props) => (
	<div className="site-footer">
		<div className="page-width-wrap site-footer__inner-wrap">
			<Placeholder name="jss-site-footer" rendering={props.rendering} />
		</div>
		<div className="legal">
			<div className="page-width-wrap legal__inner-wrap">
				<small className="copyright legal__copyright"><Text field={props.fields.copyright} /></small>
				<nav className="legal-nav">
					<ul className="legal-nav__list">
						<li className="legal-nav__item">
							<Link field={props.fields.privacyPolicy} />
						</li>
					</ul>
				</nav>	
				<nav className="brand-nav legal-nav">
					<ul className="legal-nav__list">
						<li className="legal-nav__item">
							<Link field={props.fields.blueRhino} />
						</li>
					</ul>
				</nav>	
			</div>
		</div>
	</div>
);

export default SiteFooter;