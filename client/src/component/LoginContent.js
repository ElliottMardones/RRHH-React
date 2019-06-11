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
import Axios from 'axios';

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
        const rut = this.refs.rut.refs.rut.value;
        const password = this.refs.password.refs.password.value;
        if (rut && password) {
            Axios.post('/users/authenticate', { rut, password })
                .then(
                    (res) => {
                        this.props.setStateApp({ user: res.data })
                        loginMessage.isOpen = false;
                        this.setState({ loginMessage });
                        this.props.stateApp.showContent('HomeContent')
                    }
                )
                .catch(
                    (err) => {
                        this.props.setStateApp({ user: null })
                        loginMessage.isOpen = true;
                        loginMessage.type = 'warning';
                        loginMessage.content = 'Usuario no encontrado.';
                        this.setState({ loginMessage });
                    }
                );
        } else {
            loginMessage.isOpen = true;
            loginMessage.type = 'warning';
            loginMessage.content = 'RUT y Clave requeridos.';
            this.setState({ loginMessage });
        }
    }

    onEntry() {
        Axios.get('/logout')
            .then(
                (res) => {
                    this.props.setStateApp({
                        user: null
                    });
                }
            )
            .catch(console.log);
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
                                <Form onSubmit={this.handlerLoginSubmit} ref="loginForm">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <span className="fa fa-user" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="RUT" ref="rut" innerRef="rut" required />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <span className="fa fa-lock" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="password" placeholder="Clave" ref="password" innerRef="password" required />
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