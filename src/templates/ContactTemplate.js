import React from 'react';
import Hero from '../components/Hero';
import MyForm from '../components/MyForm';


function ContactTemplate(props) {

    return(
        <div>
            <Hero title={props.title}/>
            <MyForm />
        </div>
    )

}

export default ContactTemplate