import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Hero = (props) => (
  <a href="https://www.ferrellgas.com/fueling-what-matters-to-you/" className="hero hero--with-video hero-home hero--with-text">
		<div className="hero__video-wrap">
			<video className="hero__video" autoPlay loop muted preload="auto" poster="/images/1600x600.jpg?crop=0.16249999999999998,0,0.00029069767441902754,0.0000000000000002820138610149&cropmode=percentage&width=480&height=215">
				<source data-src="/videos/480x215.mp4"
						data-poster="/images/1600x600.jpg?crop=0.16249999999999998,0,0.00029069767441902754,0.0000000000000002820138610149&cropmode=percentage&width=480&height=215"
						type="video/mp4"
						data-media="(max-width: 29.9375em)"/>
				<source data-src="/videos/768x315.mp4"
						data-poster="/images/1600x600.jpg?crop=0.085625,0,0.000089285714285714286,0&cropmode=percentage&width=768&height=315"
						type="video/mp4"
						data-media="(min-width: 30em) and (max-width: 37.9375em)"/>
				<source data-src="/videos/1280x568.mp4"
						data-poster="/images/1600x600.jpg?crop=0.154375,0,0.00055457746478877507,0&cropmode=percentage&width=1280&height=568"
						type="video/mp4"
						data-media="(min-width: 48.0625em) and (max-width: 80em)"/>
				<source data-src="/videos/1600x600.mp4"
						data-poster="/images/1600x600.jpg?crop=0,0,0,0&cropmode=percentage&width=1600&height=600"
						type="video/mp4"
						data-media="(min-width: 80.0625em)"/>
			</video>
		</div>
		<div className="hero__content hero__content--with-description">
			<div className="hero__text hero__text--with-description">
				<h1 className="hero__title hero__title--with-description"><Text field={props.fields.heading} /></h1>
				<p className="hero__description"></p>
			</div>
		</div>
	</a>
);

export default Hero;
