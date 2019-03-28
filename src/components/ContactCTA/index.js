import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

const ContactCTA = (props) => (
	<div className="contact-cta">
		<h3 className="contact-cta__heading"><Text field={props.fields.heading} /></h3>
		<div className="contact-cta__description">
			<p><Text field={props.fields.description} /></p>
		</div>
		<Link field={props.fields.button} />
	</div>
);

export default ContactCTA;