import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const LocationFinderPod = (props) => (
	<form className="content-pod location-finder-pod content-pod--sidebar" action="https://www.ferrellgas.com/locations/">
		<h3 className="content-pod__heading content-pod__heading--with-image">
			<Image field={props.fields.pinImage} />
			<span><Text field={props.fields.heading} /></span>
		</h3>
		<p className="content-pod__description content-pod__description--styled"><Text field={props.fields.description} /></p>
		<div className="field-button-combo">
			<div className="field field-button-combo__field">
				<label htmlFor="zip-code"><Text field={props.fields.zipLabel} /></label>
				<input type="text" name="zipcode" id="zip-code" className="input--small" />
			</div>
			<button type="submit" className="button button--alt button--inline"><Text field={props.fields.findNowButtonText} /></button>
		</div>
	</form>
);

export default LocationFinderPod;
