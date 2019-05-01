import React, { Component } from 'react';
import './LoginContent.css';
import {
    Container,
    Card,
    CardHeader,
    CardBody,
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Button,
    Alert
} from 'reactstrap';

class LoginContent extends Component {
    constructor(props) {
        super(props);

        this.handlerLoginSubmit = this.handlerLoginSubmit.bind(this);
        this.state = {
            isVisible: false,
            loginMessage: {
                type: 'primary',
                content: 'No content.',
                isOpen: false,
                toggle: (
                    () => {
                        const { loginMessage } = this.state;
                        loginMessage.isOpen = false;
                        this.setState({ loginMessage });
                    }
                )
            }
        }
    }

    handlerLoginSubmit(event) {
        event.preventDefault();
        const { loginMessage } = this.state;
        loginMessage.isOpen = true;
        loginMessage.type = 'danger';
        loginMessage.content = 'Error inesperado.';
        this.setState({ loginMessage });
    }

    onLeave() {
        this.state.loginMessage.toggle();
    }

    render() {
        return (
            <div className="LoginContent" style={{ 'display': ((this.state.isVisible) ? 'block' : 'none') }}>
                <Container style={{ display: 'table', width: '100%' }}>
                    <div id="login-container">
                        <Card id="login-form">
                            <CardHeader>Login</CardHeader>
                            <CardBody>
                                <Alert color={this.state.loginMessage.type} isOpen={this.state.loginMessage.isOpen} toggle={this.state.loginMessage.toggle} fade={false}>
                                    {this.state.loginMessage.content}
                                </Alert>
                                <Form onSubmit={this.handlerLoginSubmit}>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <span className="fa fa-user" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="email" placeholder="Correo Electronico" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <span className="fa fa-lock" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="password" placeholder="Clave" />
                                    </InputGroup>
                                    <br />
                                    <Button type="submit" color="primary" block>Entrar</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
            </div>
        );
    }
}

export default LoginContent