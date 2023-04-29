import React from 'react';

import Card from '../components/Card';

import software from '../assets/images/software.jpg';
import webDev from '../assets/images/webDev.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Software Projects',
                    subTitle: 'Projects based off of Software Engineering',
                    imgSrc: software,
                    link: '/',
                    selected: false
                },
                {
                    id: 1,
                    title: "Web Projects",
                    subTitle: 'Projects based off of Web Development',
                    imgSrc: webDev,
                    link: '/',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return(
            <div className='d-flex flex-row justify-content-evenly'>
                {
                    items.map(item => {
                        return <Card item={item} hover={() => {this.handleCardClick(item.id)}} key={item.id} />
                    })}
             </div>
            ) 
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;