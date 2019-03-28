import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import Helmet from 'react-helmet';

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.
let Navigation = ({ t, i18n }) => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <NavLink to="/" className="text-dark">
        
      </NavLink>
    </h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a
        className="p-2 text-dark"
        href="https://jss.sitecore.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('Documentation')}
      </a>
      <NavLink to="/styleguide" className="p-2 text-dark">
        {t('Styleguide')}
      </NavLink>
      <NavLink to="/graphql" className="p-2 text-dark">
        {t('GraphQL')}
      </NavLink>
    </nav>
  </div>
);

// inject dictionary props (`t`) into navigation so we can translate it
// NOTE: using this is needed instead of using i18next directly to keep
// the component state updated when i18n state (e.g. current language) changes
Navigation = withNamespaces()(Navigation);

const Layout = ({ route }) => (
  <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
		<title>{(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'pageTitle'}</title>
		<link rel="shortcut icon" href="/media/1447/favicon.ico" />
		<meta name="google-site-verification" content="Dtr3KpIHi9G2kP9Jnnvqhu3XKi0kJHhVIUaXjSQIR1g" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="keywords"    content="{(route.fields && route.fields.metaKeywords && route.fields.metaKeywords.value) || 'metaKeywords'}"    />
		<meta name="description" content="{(route.fields && route.fields.metaDescription && route.fields.metaDescription.value) || 'metaDescription'}" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />

		<meta property="og:title" content="{(route.fields && route.fields.ogTitle && route.fields.ogTitle.value) || 'ogTitle'}" />
		<meta property="og:image" content="{(route.fields && route.fields.ogImage && route.fields.ogImage.value) || 'ogImage'}" />
		<meta property="og:url" content="{(route.fields && route.fields.ogUrl && route.fields.ogUrl.value) || 'ogUrl'}" />
		<meta property="og:description" content="{(route.fields && route.fields.ogDescription && route.fields.ogDescription.value) || 'ogDescription'}" />
		<meta property="og:site_name" content="{(route.fields && route.fields.ogSiteName && route.fields.ogSiteName.value) || 'ogSiteName'}" />
		<meta property="og:type" content="{(route.fields && route.fields.ogType && route.fields.ogType.value) || 'ogType'}" />

		<meta name="twitter:card" content="{(route.fields && route.fields.twitterCard && route.fields.twitterCard.value) || 'twitterCard'}" />
		<meta name="twitter:site" content="{(route.fields && route.fields.twitterSite && route.fields.twitterSite.value) || 'twitterSite'}" />
		<meta name="twitter:title" content="{(route.fields && route.fields.twitterTitle && route.fields.twitterTitle.value) || 'twitterTitle'}" />
		<meta name="twitter:description" content="{(route.fields && route.fields.twitterDescription && route.fields.twitterDescription.value) || 'twitterDescription'}" />
		<meta name="twitter:image" content="{(route.fields && route.fields.twitterImage && route.fields.twitterImage.value) || 'twitterImage'}" />
		<link rel="stylesheet" type="text/css" href="https://www.ferrellgas.com/fonts/485047/E43897AF5510883CB.css" />
		<link rel="stylesheet" href="/css/global.css" />
    </Helmet>

    {/*
      VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
      If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
      For XM (CMS-only) apps, this should be removed.

      VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
    */}
    <VisitorIdentification />

    {/* root placeholder for the app, which we add components to using route data */}
	<Placeholder name="jss-global-message" rendering={route} />
	<header className="site-header">
		<Placeholder name="jss-header" rendering={route} />
	</header>
    <main>
      <Placeholder name="jss-main" rendering={route} />
    </main>
  </React.Fragment>
);

export default Layout;
