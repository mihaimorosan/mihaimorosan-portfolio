import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero'

function AboutTemplate(props) {

    return(
        <div>
            <Hero title={props.title}/>

            <Content>
                <p>Hello! My name is Mihai Morosan and I am fourth-year student at Ryerson University with a major in Computer Science and an interest in Software Engineering, Web Development, and Robotics.</p>
                
                <p> Filler to be added later </p>
            </Content>
        </div>
    )

}

export default AboutTemplate;