import React from 'react';

import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Content from '../components/Content';

class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    } 

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });

        emailjs.sendForm('mihaimorosan.portfolio', 'my_default_template', event.target, 'aa4uqwtbGK4FjS_IQ')
            .then((result) => {
                console.log(result.text);
                this.setState({
                    disabled: false,
                    emailSent: true,
                });
            }, (error) => {
                console.log(error.text);
                this.setState({
                    disabled: false,
                    emailSent: false,
                }); 
            });
            
        event.target.reset();
    }

    render() {
        return(
            <div>
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="4" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled} >
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email sent! I'll get back to you as soon as I can!</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Whoops! Didn't go through! You might have to try again now or later.</p>}

                    </Form>
                </Content>
            </div>
        );
    }

}

export default MyForm;