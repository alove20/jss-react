import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const FeaturedHomePods = (props) => (
  <div className="featured-home-pods">
	<div className="page-width-wrap featured-home-pods__inner-wrap">
		<Placeholder name="jss-featured-home-pods" rendering={props.rendering} />
	</div>
  </div>
);

export default FeaturedHomePods;
