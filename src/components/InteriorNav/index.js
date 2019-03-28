import React from 'react';

const InteriorNav = (props) => (
	<nav className="interior-nav nav" data-breakpoints-inited="true">
		<ul className="interior-nav__list nav__list page-width-wrap">
			<li className="interior-nav__item nav__item">
				<a href="https://www.ferrellgas.com/jobs/" className="interior-nav__link nav__link">Jobs</a>
				<ul className="interior-nav__child-list nav__child-list">
					<li className="interior-nav__child-item nav__child-item">
						<a href="https://www.ferrellgas.com/ferrellgas-jobs/types-of-jobs/" className="interior-nav__child-link nav__child-link">Types of Jobs</a>
					</li>
					<li className="interior-nav__child-item nav__child-item">
						<a href="https://www.ferrellgas.com/ferrellgas-jobs/life-at-ferrellgas/" className="interior-nav__child-link nav__child-link">Life at Ferrellgas</a>
					</li>
					<li className="interior-nav__child-item nav__child-item">
						<a href="https://www.ferrellgas.com/ferrellgas-jobs/benefits/" className="interior-nav__child-link nav__child-link">Benefits</a>
					</li>
					<li className="interior-nav__child-item nav__child-item">
						<a href="https://www.ferrellgas.com/ferrellgas-jobs/" className="interior-nav__child-link nav__child-link">Job Search</a>
					</li>
				</ul>
			</li>
			<li className="interior-nav__item nav__item">
				<a href="https://www.ferrellgas.com/our-company/investor-information/" className="interior-nav__link nav__link">Investor Information</a>
				<ul className="interior-nav__child-list nav__child-list">
					<li className="interior-nav__child-item nav__child-item">
						<a href="http://www.ferrellgas.com/our-company/investor-information/sec-filings/" className="interior-nav__child-link nav__child-link">SEC Filings</a>
					</li>
					<li className="interior-nav__child-item nav__child-item">
						<a href="http://www.ferrellgas.com/our-company/investor-information/stock-price/" className="interior-nav__child-link nav__child-link">Stock Price</a>
					</li>
					<li className="interior-nav__child-item nav__child-item">
						<a href="http://www.ferrellgas.com/our-company/investor-information/press-releases/" className="interior-nav__child-link nav__child-link">Press Releases</a>
					</li>
					<li className="interior-nav__child-item nav__child-item">
						<a href="https://www.ferrellgas.com/our-company/leadership/" className="interior-nav__child-link nav__child-link">Leadership</a>
					</li>
				</ul>
			</li>
			<li className="interior-nav__item nav__item">
				<a href="https://www.ferrellgas.com/our-company/acquisitions/" className="interior-nav__link nav__link">Selling Your Business</a>
			</li>
			<li className="interior-nav__item nav__item">
				<a href="https://www.ferrellgas.com/our-company/leadership/" className="interior-nav__link nav__link">Leadership</a>
			</li>
		</ul>
	</nav>
);

export default InteriorNav;
