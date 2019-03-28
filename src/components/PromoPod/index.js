import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

const PromoPod = (props) => (
	<div className="promo-pod">
		<div className="page-width-wrap page-width-wrap--small promo-pod__page-width-wrap">
			<h3 className="promo-pod__title">
				<Text field={props.fields.title} />
			</h3>
			<Link field={props.fields.button} />
		</div>
	</div>
);

export default PromoPod;
