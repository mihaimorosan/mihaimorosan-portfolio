import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="m-card-info" style={style}>
            <p className="m-card-title">
                {props.title}
            </p>
            <p className="m-card-sub-title">
                {props.subTitle}
            </p>
            <a href={props.link} rel="noopener noreferrer">
                View More
            </a>
        </animated.div>
    );
}

export default CardInfo;