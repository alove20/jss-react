import React from 'react';

const SiteFooterConnect = (props) => (
	<div className="site-footer__connect">
		<a href="tel:8883377355" className="icon icon--phone icon--branded icon--with-label phone-link site-footer__phone-link"><span> 888-337-7355</span></a>
		<ul className="social-media site-footer__social-media">
			<li className="social-media__item">
				<a href="https://www.facebook.com/Ferrellgas/" target="_blank" rel="noopener noreferrer" className="social-media__link icon icon--facebook"><span className="is-vishidden">Facebook</span></a>
			</li>
			<li className="social-media__item">
				<a href="https://twitter.com/ferrellgas" target="_blank" rel="noopener noreferrer" className="social-media__link icon icon--twitter"><span className="is-vishidden">Twitter</span></a>
			</li>
			<li className="social-media__item">
				<a href="https://www.linkedin.com/company/ferrellgas" target="_blank" rel="noopener noreferrer" className="social-media__link icon icon--linkedin"><span className="is-vishidden">LinkedIn</span></a>
			</li>
			<li className="social-media__item">
				<a href="https://www.youtube.com/channel/UCVtdl9EGvFTNsklgwhn_X8w" target="_blank" rel="noopener noreferrer" className="social-media__link icon icon--youtube"><span className="is-vishidden">Youtube</span></a>
			</li>
		</ul>
	</div>
);

export default SiteFooterConnect;
