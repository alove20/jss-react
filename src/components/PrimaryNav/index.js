import React from 'react';
import { NavLink } from 'react-router-dom';

const PrimaryNav = (props) => (
  <div className="site-header__inner-wrap">
            <NavLink to="/" className="logo">
                <picture>
                    <source srcSet="/images/logo-vertical.jpg" media="(min-width: 64em) and (max-width: 87.499em)" />
                    <source srcSet="/images/FGLogo_70.png" />
                    <img src="/images/logo.jpg" className="logo__image" alt="Ferrellgas" />
                </picture>
			</NavLink>
        	<nav className="primary-nav nav">
		<ul className="primary-nav__list nav__list">
				<li className="primary-nav__item nav__item">					
					<a href="https://www.ferrellgas.com/residential-overview/" className="primary-nav__link nav__link">For Your Home</a>
                        <ul className="primary-nav__child-list nav__child-list">
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/indoor/" className="primary-nav__child-link nav__child-link">Indoor</a>
                                        <ul className="primary-nav__child-list nav__child-list">
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/water-heating/" className="primary-nav__child-link nav__child-link">Water Heating</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/indoor-fireplaces/" className="primary-nav__child-link nav__child-link">Indoor Fireplaces</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/generators/" className="primary-nav__child-link nav__child-link">Generators</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/gas-dryers/" className="primary-nav__child-link nav__child-link">Gas Dryers</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/space-heating/" className="primary-nav__child-link nav__child-link">Space Heating</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/furnaces-boilers/" className="primary-nav__child-link nav__child-link">Furnaces &amp; Boilers</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/propane-ranges-and-cooktops/" className="primary-nav__child-link nav__child-link">Propane Ranges &amp; Cooktops</a>
                                                </li>
                                        </ul>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/outdoor/" className="primary-nav__child-link nav__child-link">Outdoor</a>
                                        <ul className="primary-nav__child-list nav__child-list">
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/outdoor-fireplaces-fire-pits/" className="primary-nav__child-link nav__child-link">Outdoor Fireplaces &amp; Fire Pits</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/patio-heaters/" className="primary-nav__child-link nav__child-link">Patio Heaters</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/outdoor-kitchens/" className="primary-nav__child-link nav__child-link">Outdoor Kitchens</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/propane-grills/" className="primary-nav__child-link nav__child-link">Propane Grills</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/swimming-pool-spa-heat/" className="primary-nav__child-link nav__child-link">Swimming Pool &amp; Spa Heat</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/residential-overview/outdoor-lighting/" className="primary-nav__child-link nav__child-link">Outdoor Lighting</a>
                                                </li>
                                        </ul>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/customer-support/service-plans/exchange-and-refill/" className="primary-nav__child-link nav__child-link">Propane Grill Tank</a>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/customer-support/service-plans/" className="primary-nav__child-link nav__child-link">Delivery &amp; Service Options</a>
                                        <ul className="primary-nav__child-list nav__child-list">
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/customer-support/service-plans/smartfill/" className="primary-nav__child-link nav__child-link">Smart Fill</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/customer-support/service-plans/keep-full/" className="primary-nav__child-link nav__child-link">Keep Full</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/customer-support/service-plans/will-call/" className="primary-nav__child-link nav__child-link">Will Call</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/customer-support/service-plans/ferrellsecure/" className="primary-nav__child-link nav__child-link">FerrellSecure</a>
                                                </li>
                                        </ul>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/sign-up/" className="primary-nav__child-link nav__child-link">Sign Up</a>
                                </li>
                        </ul>
				</li>
				<li className="primary-nav__item nav__item">					
					<a href="https://www.ferrellgas.com/for-your-business/" className="primary-nav__link nav__link">For Your Business</a>
                        <ul className="primary-nav__child-list nav__child-list">
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/for-your-business/industrial/" className="primary-nav__child-link nav__child-link">Industrial</a>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/for-your-business/commercial/" className="primary-nav__child-link nav__child-link">Commercial</a>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/for-your-business/autogas/" className="primary-nav__child-link nav__child-link">Autogas</a>
                                        <ul className="primary-nav__child-list nav__child-list">
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/for-your-business/autogas/tax-credits/" className="primary-nav__child-link nav__child-link">Tax Credits</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/for-your-business/autogas/vehicle-options/" className="primary-nav__child-link nav__child-link">Vehicle Options</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/for-your-business/autogas/lawn-equipment/" className="primary-nav__child-link nav__child-link">Lawn Equipment</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/for-your-business/autogas/fueling-options/" className="primary-nav__child-link nav__child-link">Fueling Options</a>
                                                </li>
                                        </ul>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/for-your-business/agriculture/" className="primary-nav__child-link nav__child-link">Agriculture</a>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/for-your-business/national-accounts/" className="primary-nav__child-link nav__child-link">National Accounts</a>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/sign-up/" className="primary-nav__child-link nav__child-link">Sign Up</a>
                                </li>
                        </ul>
				</li>
				<li className="primary-nav__item nav__item">					
					<a href="https://www.ferrellgas.com/fueling-what-matters-to-you/" className="primary-nav__link nav__link">Fueling What Matters to You</a>
                        <ul className="primary-nav__child-list nav__child-list">
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/tank-talk/" className="primary-nav__child-link nav__child-link">Ferrellgas Blog: Tank Talk</a>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/our-company/community-involvement/" className="primary-nav__child-link nav__child-link">Community Involvement</a>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/share-the-warmth/" className="primary-nav__child-link nav__child-link">Share the Warmth</a>
                                </li>
                        </ul>
				</li>
				<li className="primary-nav__item nav__item">					
					<a href="https://www.ferrellgas.com/customer-support/" className="primary-nav__link nav__link">Customer Care</a>
                        <ul className="primary-nav__child-list nav__child-list">
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/refer-a-friend/" className="primary-nav__child-link nav__child-link">Refer a Friend</a>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/customer-support/payment-options/" className="primary-nav__child-link nav__child-link">Payment Options</a>
                                        <ul className="primary-nav__child-list nav__child-list">
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/customer-support/payment-options/budget-billing/" className="primary-nav__child-link nav__child-link">Budget Billing</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/gopaperless/" className="primary-nav__child-link nav__child-link">Go Paperless</a>
                                                </li>
                                        </ul>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/customer-support/safety/" className="primary-nav__child-link nav__child-link">Safety</a>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/faqs/" className="primary-nav__child-link nav__child-link">FAQs</a>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/customer-support/service-plans/" className="primary-nav__child-link nav__child-link">Delivery &amp; Service Options</a>
                                        <ul className="primary-nav__child-list nav__child-list">
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/customer-support/service-plans/will-call/" className="primary-nav__child-link nav__child-link">Will Call</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/customer-support/service-plans/smartfill/" className="primary-nav__child-link nav__child-link">SmartFill</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/customer-support/service-plans/keep-full/" className="primary-nav__child-link nav__child-link">Keep Full</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/customer-support/service-plans/ferrellsecure/" className="primary-nav__child-link nav__child-link">FerrellSecure</a>
                                                </li>
                                        </ul>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/customer-support/myferrellgas/" className="primary-nav__child-link nav__child-link">Manage My Account</a>
                                </li>
                        </ul>
				</li>
				<li className="primary-nav__item nav__item">					
					<a href="https://www.ferrellgas.com/our-company/" className="primary-nav__link nav__link">About Us</a>
                        <ul className="primary-nav__child-list nav__child-list">
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/jobs/" className="primary-nav__child-link nav__child-link">Jobs</a>
                                        <ul className="primary-nav__child-list nav__child-list">
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/ferrellgas-jobs/types-of-jobs/" className="primary-nav__child-link nav__child-link">Types of Jobs</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/ferrellgas-jobs/life-at-ferrellgas/" className="primary-nav__child-link nav__child-link">Life at Ferrellgas</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/ferrellgas-jobs/benefits/" className="primary-nav__child-link nav__child-link">Benefits</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/ferrellgas-jobs/" className="primary-nav__child-link nav__child-link">Job Search</a>
                                                </li>
                                        </ul>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/our-company/investor-information/" className="primary-nav__child-link nav__child-link">Investor Information</a>
                                        <ul className="primary-nav__child-list nav__child-list">
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="http://www.ferrellgas.com/our-company/investor-information/sec-filings/" className="primary-nav__child-link nav__child-link">SEC Filings</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="http://www.ferrellgas.com/our-company/investor-information/stock-price/" className="primary-nav__child-link nav__child-link">Stock Price</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="http://www.ferrellgas.com/our-company/investor-information/press-releases/" className="primary-nav__child-link nav__child-link">Press Releases</a>
                                                </li>
                                                <li className="primary-nav__child-item nav__child-item">
                                                    <a href="https://www.ferrellgas.com/our-company/leadership/" className="primary-nav__child-link nav__child-link">Leadership</a>
                                                </li>
                                        </ul>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/our-company/acquisitions/" className="primary-nav__child-link nav__child-link">Selling Your Business</a>
                                </li>
                                <li className="primary-nav__child-item nav__child-item">
                                    <a href="https://www.ferrellgas.com/our-company/leadership/" className="primary-nav__child-link nav__child-link">Leadership</a>
                                </li>
                        </ul>
				</li>
		</ul>	
	</nav>

    </div>

);

export default PrimaryNav;
