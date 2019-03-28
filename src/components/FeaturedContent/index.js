import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const FeaturedContent = (props) => (
  <div className="featured-content">
		<style dangerouslySetInnerHTML={{__html: `
			/* CMS: small image 480x280 */
        .featured-content:before {
            background-image: url(/images/mt-24524_pod2.jpg?center=0.46857142857142858,0.64666666666666661&mode=crop&width=480&height=280);
        }

        /* CMS: large image 721x420 */
        @media only screen and (min-width: 30em) {
            .featured-content:before {
                background-image: url(/images/mt-24524_pod2.jpg?center=0.46857142857142858,0.64666666666666661&mode=crop&width=721&height=420);
            }
        }

        /* CMS: large image 721x420 */
        /* IE8 hack */
        .featured-content:before {
            background-image: url(/images/mt-24524_pod2.jpg?center=0.46857142857142858,0.64666666666666661&mode=crop&width=721&height=420)\9;
        }

		`}} />
		<Placeholder name="jss-featured-content" rendering={props.rendering} />
  </div>
);

export default FeaturedContent;