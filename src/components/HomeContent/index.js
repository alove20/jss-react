import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const HomeContent = (props) => (
  <div className="home-content">
	<Placeholder name="jss-home-content" rendering={props.rendering} />
  </div>
);

export default HomeContent;
