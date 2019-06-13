import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col
} from 'reactstrap';

class CreateUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }

        this.toggle = this.toggle.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.handlerRutKeyPress = this.handlerRutKeyPress.bind(this);
    }

    toggle() {
        this.setState(
            {
                modal: !this.state.modal
            }
        );
    }

    show() {
        this.setState(
            {
                modal: true
            }
        );
    }

    hide() {
        this.setState(
            {
                modal: false
            }
        );
    }

    handlerRutKeyPress(event) {
        const re = /[0-9]/g;
        if (!re.test(event.key)) {
            event.preventDefault();
        }
    }

    handlerDvKeyPress(event) {
        const re = /[0-9k]/g;
        if (!re.test(event.key)) {
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="CreateUserModal">
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Agregar Nuevo Usuario</ModalHeader>
                    <ModalBody className="scrollbar scrollbar-default" style={{maxHeight:'calc(100vh - 192px)'}}>
                        <Form>
                            <Row form>
                                <Col xs={9} sm={10}>
                                    <FormGroup>
                                        <Label for="create-user-modal-rut">RUT</Label>
                                        <Input id="create-user-modal-rut" type="text" placeholder="RUT" maxLength="9" onKeyPress={this.handlerRutKeyPress} />
                                    </FormGroup>
                                </Col>
                                <Col xs={3} sm={2}>
                                    <FormGroup>
                                        <Label for="create-user-modal-dv">DV</Label>
                                        <Input id="create-user-modal-dv" type="text" placeholder="DV" maxLength="1" onKeyPress={this.handlerDvKeyPress} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="create-user-modal-name">Nombre Completo</Label>
                                <Input id="create-user-modal-name" type="text" placeholder="Nombre Completo" maxLength="254" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="create-user-modal-email">Correo Electrónico</Label>
                                <Input id="create-user-modal-email" type="email" placeholder="Correo Electrónico" maxLength="254" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="create-user-modal-password">Clave</Label>
                                <Input id="create-user-modal-password" type="password" placeholder="Clave" maxLength="32" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.hide}>Cancelar</Button>{' '}
                        <Button color="primary" onClick={this.props.onSubmit}>Agregar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CreateUserModal;
