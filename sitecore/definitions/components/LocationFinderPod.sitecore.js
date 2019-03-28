// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the LocationFinderPod component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'LocationFinderPod',
    icon: SitecoreIcon.DocumentTag,
    fields: [
		{ name: 'heading', type: CommonFieldTypes.SingleLineText },
		{ name: 'pinImage', type: CommonFieldTypes.SingleLineText },
		{ name: 'description', type: CommonFieldTypes.RichText },
		{ name: 'zipLabel', type: CommonFieldTypes.SingleLineText },
		{ name: 'findNowButtonText', type: CommonFieldTypes.SingleLineText }
	],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
