import React from 'react';

import Card from '../components/Card';

import software from '../assets/images/software.jpg';
import webDev from '../assets/images/webDev.jpg';
import robotics from "../assets/images/robotics.jpg"

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
                },
                {
                    id: 2,
                    title: "Arduino Projects (Coming Soon!)",
                    subTitle: 'Projects based off of Robotics',
                    imgSrc: robotics,
                    link: '/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {
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
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
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