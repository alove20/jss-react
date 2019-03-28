import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const TwoColumn = (props) => (
	<div className="page-width-wrap col-wrap">
		<Placeholder name="jss-main-header" rendering={props.rendering} />
		<div className="col col--primary">
			<Placeholder name="jss-main-primary" rendering={props.rendering} />
		</div>
		<aside className="sidebar col col--secondary">
			<Placeholder name="jss-main-aside" rendering={props.rendering} />
		</aside>
	</div>
);

export default TwoColumn;
