import React, {Component} from 'react';
import {Button, Col, Container, Form, Jumbotron, Row} from "react-bootstrap";


class Message extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={3}>
                        <Jumbotron>
                            <Form className={"jumbotron-divider"}>
                                <Form.Group>
                                    <Form.Label>Search</Form.Label>
                                    <Form.Control type="text" placeholder="Name or CID"/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Form>
                            {/*
                            Hier iterieren wir über die Kunden die in den Filter fallen
                            */}
                        </Jumbotron>
                    </Col>
                    <Col md={9}>
                        <Jumbotron>
                            <h2>Customerdata</h2>
                            <Form className={"jumbotron-divider"}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email"/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"/>
                                    </Form.Group>
                                    <Col/>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email"/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"/>
                                    </Form.Group>
                                    <Col className={"button-wrapper"}>
                                        <Button className={"message-submit-button"} variant="warning" type="submit">
                                            Delete
                                        </Button>
                                    </Col>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email"/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"/>
                                    </Form.Group>

                                    <Col className={"button-wrapper"}>
                                        <Button className={"message-submit-button"} variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Form.Row>
                            </Form>

                            <Form id={"messageForm"}>
                                <Form.Group controlId="messageTextArea">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Jumbotron>
                    </Col>

                </Row>
            </Container>
        )
    }
}


export default Message;