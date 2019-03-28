import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ContentPod = (props) => (
	<div className="content-pod contact-pod content-pod--sidebar">
		<h3 className="content-pod__heading contact-pod__heading"><Text field={props.fields.heading} /></h3>
		<p className="content-pod__description content-pod__description--styled"><Text field={props.fields.description} /></p>
		<ul className="contacts">
			<li className="contacts__item"><a href="tel:18883377355" className="icon icon--phone icon--branded icon--with-label contact-link phone-link contact-link--large"><span>1-888-337-7355</span></a></li>
			<li className="contacts__item"><a href="https://www.ferrellgas.com/contact-us/" className="icon icon--email icon--branded icon--with-label contact-link contact-link--large"><span>Email</span></a></li>
		</ul>
	</div>
);

export default ContentPod;
