import React from 'react';

const MicroNav = (props) => (
  <div className="toolbar">
        <a href="tel:8883377355" className="icon icon--phone icon--branded icon--with-label phone-link toolbar__phone-link"><span> 888-337-7355</span></a>
        
    <nav className="micro-nav">
        <ul className="micro-nav__list">
                <li className="micro-nav__item">
                    <a href="https://www.ferrellgas.com/request-a-fill/" className="micro-nav__link icon icon--tank icon--with-label"><span>Request a Refill</span></a>
                </li>
                <li className="micro-nav__item">
                    <a href="https://www.ferrellgas.com/contact-us/" className="micro-nav__link icon icon--email icon--with-label"><span>Contact Us</span></a>
                </li>
                <li className="micro-nav__item">
                    <a href="https://www.ferrellgas.com/locations/" className="micro-nav__link icon icon--map-pin icon--with-label"><span>Locations</span></a>
                </li>
                <li className="micro-nav__item">
                    <a href="https://www.ferrellgas.com/jobs/" className="micro-nav__link icon icon--jobs icon--with-label"><span>Jobs</span></a>
                </li>
                <li className="micro-nav__item micro-nav__item--highlight">
                    <a href="https://myferrellgas.com/" rel="noopener noreferrer" target="_blank" className="micro-nav__link icon icon--profile icon--with-label"><span>MyFerrellgas</span></a>
                </li>
        </ul>
    </nav>

        <form className="search-form field-button-combo" action="/search/" method="post">
            <div className="field search-form__field field-button-combo__field">
                <label htmlFor="search" className="is-vishidden">Keywords</label>
                <input className="search-form__input" type="search" name="search" id="search" placeholder="Search" required aria-required="true"/>
            </div>
            <button type="submit" className="button button--icon icon icon--search search-form__button field-button-combo__button"><span className="is-vishidden">Search</span></button>
        </form>
    </div>
);

export default MicroNav;
