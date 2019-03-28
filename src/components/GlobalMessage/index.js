import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

const GlobalMessage = (props) => (
	<div className="global-message global-message--green js-global-message">
		<div className="page-width-wrap global-message__inner-wrap js-global-message-inner-wrap">
			<h3 className="global-message__title icon icon--with-label icon--info"><span><Text field={props.fields.heading} /></span></h3>
			<div className="global-message__description">
				<p><Text field={props.fields.description} /></p>
			</div>
			<Link field={props.fields.link} />
		</div>
	</div>
);

export default GlobalMessage;
