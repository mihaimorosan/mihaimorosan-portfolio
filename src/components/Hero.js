import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function Hero(props) {

    return(
        <Container fluid={true}>
            <Row className="justify-content-center py-5">
                <Col md={8} sm={12}>
                    { props.title && <h1 className="font-weight-bold">{props.title}</h1> }
                    { props.subTitle && <h2 className="font-weight-light">{props.subTitle}</h2> }
                    { props.misc && <h3 className="lead font-weight-light">{props.misc}</h3> }
                </Col>
            </Row>
        </Container>
    );

}

export default Hero;