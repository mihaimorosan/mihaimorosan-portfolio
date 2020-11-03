import React from 'react';

import Hero from '../components/Hero'

function HomeTemplate(props) {

    return(
        <Hero title={props.title} subTitle={props.subTitle} misc={props.misc}/>
    )

}

export default HomeTemplate