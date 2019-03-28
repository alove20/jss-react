import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const FeaturedLocationFinder = (props) => (
  <div className="featured-location-finder">
        <div className="page-width-wrap featured-location-finder__inner-wrap">
            <div className="featured-location-finder__image">
                    <img src="/images/usa.png" alt="Find a Location"/>
            </div>
            <div className="featured-location-finder__text">
                <h2 className="featured-location-finder__heading"><Text field={props.fields.heading} /></h2>
                <p className="featured-location-finder__description">
                    <Text field={props.fields.description} />
                </p>
            </div>
            <form className="featured-location-finder__form" action="https://www.ferrellgas.com/locations/">
                <div className="field featured-location-finder__field">
                    <label htmlFor="zip-code" className="featured-location-finder__label"><Text field={props.fields.zipLabel} /></label>
                    <input type="text" name="zipcode" id="zip-code" className="featured-location-finder__input" required="{true}"/>
                </div>
                <button type="submit" className="button button--alt featured-location-finder__button"><Text field={props.fields.buttonText} /></button>
            </form>
        </div>
    </div>
);

export default FeaturedLocationFinder;