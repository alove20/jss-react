import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Image } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

const FeaturedHomePod = (props) => (
	<div className="content-pod featured-pod featured-pod--home">
        <div className="featured-pod__image-wrap">
			<Image field={props.fields.image} />
        </div>
		<div className="featured-pod__text">
			<h2 className="featured-pod__heading"><Text field={props.fields.heading} /></h2>
			<p className="featured-pod__description"><Text field={props.fields.description} /></p>
			<Link field={props.fields.button} />
		</div>
	</div>
);

export default FeaturedHomePod;
