import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

const FeaturedContentText = (props) => (
	<div className="featured-content__text">
		<h2 className="featured-content__heading">
			<Link field={props.fields.link} />
		</h2>
		<p className="featured-content__description"><Text field={props.fields.description} /></p>
		<Link field={props.fields.button} />
	</div>
);

export default FeaturedContentText;
