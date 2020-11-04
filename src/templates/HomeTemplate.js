import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomeTemplate(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} misc={props.misc} />
            <Carousel />
        </div>
    );

}

export default HomeTemplate