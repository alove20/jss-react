import React from 'react';

const HeroInterior = (props) => (
	<div className="hero hero-interior">
        <style dangerouslySetInnerHTML={{__html: `
            .hero {
                background-image: url(/images/hero_1600x200_about_us.jpg?anchor=center&mode=crop&width=480&height=200);
            }

            @media only screen and (min-width: 481px) {
                .hero { background-image: url(/images/hero_1600x200_about_us.jpg?anchor=center&mode=crop&width=768&height=200); }
            }

            @media only screen and (min-width: 769px) {
                .hero { background-image: url(/images/hero_1600x200_about_us.jpg?anchor=center&mode=crop&width=1280&height=200); }
            }

            @media only screen and (min-width: 1281px) {
                .hero {
                    background-image: url(/images/hero_1600x200_about_us.jpg?anchor=center&mode=crop&width=1600&height=200);
                }
            }

            .hero { background-image: url(/images/hero_1600x200_about_us.jpg?anchor=center&mode=crop&width=1280&height=200)\9; }
        `}} />
    </div>
);

export default HeroInterior;
