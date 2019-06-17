import React, { Component } from 'react';
import {
    Container,
    Card,
    CardHeader,
    CardBody,
    BreadcrumbItem,
    Table
} from 'reactstrap';
import CreateUserModal from './modal/CreateUserModal';
import Axios from 'axios';

class AdminUsersContent extends Component {
    constructor(props) {
        super(props);

        this.handlerLinkClick = this.handlerLinkClick.bind(this);
        this.handlerOpenCreateUserModal = this.handlerOpenCreateUserModal.bind(this);
        this.handlerSubmitCreateUserModal = this.handlerSubmitCreateUserModal.bind(this);
        this.handlerRemoveUser = this.handlerRemoveUser.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.state = {
            isVisible: false,
            users: []
        }
    }

    handlerLinkClick(event) {
        const { showContent } = this.props.stateApp;
        event.preventDefault()
        showContent(event.currentTarget.href.split('#')[1]);
    }

    handlerOpenCreateUserModal(event) {
        this.refs.CreateUserModal.show();
    }

    handlerSubmitCreateUserModal(event) {
        if (document.getElementById('create-user-modal-rut')) {
            const rut = document.getElementById('create-user-modal-rut').value;
            const name = document.getElementById('create-user-modal-name').value;
            const email = document.getElementById('create-user-modal-email').value;
            const password = document.getElementById('create-user-modal-password').value;
            const type = 'user';
            Axios.post('/user/register', { rut, password, type, name, email }).then(
                function (res) {
                    Axios.get('/user').then(
                        function (res) {
                            this.setState(
                                {
                                    users: []
                                },
                                function (users) {
                                    this.setState({ users });
                                    this.refs.CreateUserModal.setState({ modal: false })
                                }.bind(this, res.data)
                            );
                        }.bind(this)
                    );
                }.bind(this)
            );
        }
    }

    handlerRemoveUser(event) {
        const id = event.currentTarget.getAttribute('data-user');
        Axios.delete('/user/' + id).then(
            function (res) {
                Axios.get('/user/').then(
                    function (res) {
                        this.setState(
                            {
                                users: []
                            },
                            function (users) {
                                this.setState({ users });
                            }.bind(this, res.data)
                        );
                    }.bind(this)
                );
            }.bind(this)
        );
    }

    getUser(user, index) {
        return (
            <tr key={index} >
                <td style={{ textAlign: "center", verticalAlign: "middle" }}><span className="fa fa-trash clickable" data-user={user._id} onClick={this.handlerRemoveUser} /></td>
                <td>{user.rut}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td style={{ textAlign: "center", verticalAlign: "middle" }}><span className="fa fa-th-list clickable" /></td>
            </tr>
        );
    }

    getUsers() {
        return this.state.users.map(this.getUser);
    }

    onEntry() {
        Axios.get('/user/')
            .then(
                res => {
                    console.log(res.data)
                    this.setState(
                        { users: [] },
                        () => this.setState({ users: res.data })
                    );
                }
            )
            .catch(console.log);
    }

    render() {
        return (
            <div className="AdminUsersContent" style={{ 'display': ((this.state.isVisible) ? 'block' : 'none') }}>
                <Container>
                    <Card>
                        <CardHeader>
                            <BreadcrumbItem tag="a" href="#HomeContent" onClick={this.handlerLinkClick}>Inicio</BreadcrumbItem>
                            <BreadcrumbItem tag="a" href="#AdminContent" onClick={this.handlerLinkClick}>Administración</BreadcrumbItem>
                            <BreadcrumbItem active tag="span">Usuarios</BreadcrumbItem>
                        </CardHeader>
                        <CardBody>
                            <Table striped bordered hover size="sm" responsive>
                                <thead>
                                    <tr>
                                        <th style={{ width: "34px" }} />
                                        <th>RUT</th>
                                        <th>Nombre Completo</th>
                                        <th>Correo Electrónico</th>
                                        <th style={{ width: "34px" }} />
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.getUsers()}
                                    <tr>
                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}><span className="fa fa-plus clickable" onClick={this.handlerOpenCreateUserModal} /></td>
                                        <td />
                                        <td />
                                        <td />
                                        <td />
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Container>
                <CreateUserModal ref='CreateUserModal' onSubmit={this.handlerSubmitCreateUserModal} />
            </div>
        );
    }
}

export default AdminUsersContent;
