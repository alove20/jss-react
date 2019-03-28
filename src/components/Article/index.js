import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

const Article = (props) => (
	<article className="rte-content">
		<h1><Text field={props.fields.heading} /></h1>
		<RichText field={props.fields.article} />
	</article>
);

export default Article;
