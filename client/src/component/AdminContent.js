import React, { Component } from 'react';
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  BreadcrumbItem,
  Row,
  Col,
  Button
} from 'reactstrap';

class AdminContent extends Component {
  constructor(props) {
    super(props);

    this.handlerLinkClick = this.handlerLinkClick.bind(this);
    this.state = {
      isVisible: false
    }

  }

  handlerLinkClick(event) {
    const { showContent } = this.props.stateApp;
    event.preventDefault()
    showContent(event.currentTarget.href.split('#')[1]);
  }

  render() {
    return (
      <div className="AdminContent" style={{ 'display': ((this.state.isVisible) ? 'block' : 'none') }}>
        <Container>
          <Card>
            <CardHeader>
              <BreadcrumbItem tag="a" href="#HomeContent" onClick={this.handlerLinkClick}>Inicio</BreadcrumbItem>
              <BreadcrumbItem active tag="span">Administración</BreadcrumbItem>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="3" md="4" sm="6" xs="12">
                  <Button>
                    <div className="text-center">
                      <h1><span className="fa fa-users" /></h1>
                      <span>Administración de Usuarios</span>
                    </div>
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>

    );
  }
}

export default AdminContent;
