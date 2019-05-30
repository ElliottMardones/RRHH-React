import React, { Component } from 'react';
import Icono from '../media/icono_persona.png';
import {
	Jumbotron,
	Container,
	Row,
	Col,
	Card,
	CardTitle,
	CardSubtitle,
	CardBody,
	CardImg,
} from 'reactstrap';


class HomeContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
    }

    render() {
        return (
            <div className="HomeContent" style={{'display':((this.state.isVisible)?'block':'none')}}>
            <div className="AboutUs">
              <Jumbotron fluid>
                <Container>
                  <Row>
                    <Col>
                          <h1 className='text-center display-4'>Acerca de Nosotros</h1>
                          <hr className="my-2" />
                          <Row>
                        <Col>
                              <Card>
                                <CardImg top src={Icono} atl="imagen" />
                                <CardBody>
                                  <CardTitle className='text-center'>Elliott Mardones</CardTitle>
                                  <hr className="my-2" />
                                  <CardSubtitle className='text-center'>Líder</CardSubtitle>
                                </CardBody>
                            </Card>
                            </Col>
                            <Col>
                              <Card>
                                <CardImg top src={Icono} alt="Card image cap" />
                                <CardBody>
                                  <CardTitle className='text-center'>Andres Flores</CardTitle>
                                  <hr className="my-2" />
                                  <CardSubtitle className='text-center'>Programador</CardSubtitle>
                                </CardBody>
                            </Card>
                            </Col>
                            <Col>
                              <Card>
                                <CardImg top src={Icono} alt="Card image cap" />
                                <CardBody>
                                  <CardTitle className='text-center'>Alejandro Guzman</CardTitle>
                                  <hr className="my-2" />
                                  <CardSubtitle className='text-center'>Programador</CardSubtitle>
                                </CardBody>
                            </Card>
                            </Col>
                            <Col>
                              <Card>
                                <CardImg top src={Icono} alt="Card image cap" />
                                <CardBody>
                                  <CardTitle className='text-center'>Iván Topp</CardTitle>
                                  <hr className="my-2" />
                                  <CardSubtitle className='text-center'>Programador</CardSubtitle>
                                </CardBody>
                            </Card>
                            </Col>
                          </Row>
                          <hr className="my-2" />
                        </Col>
                      </Row>

                      <Row>
                    <Col>
                          <h1 className='text-center display-4'>Acerca de este Proyecto</h1>
                          <hr className="my-2" />
                          <p align='justify'>
                            Esta página consta con tres módulos principales los cuales consisten en la capacitación específica de las labores y roles del trabajo en cuestión, capacitación efectiva de las normas legales de seguridad y por último una evaluación certificada por la empresa que acredite que la persona tiene los conocimientos técnicos básicos para realizar sus funciones.
                          </p>
                          <p  align='justify'>
                            Con esto buscamos que las empresas agilicen su capacidad de selección de personal y que estos puedan conocer previamente las labores de su trabajo y beneficios.
                          </p>
                        </Col>
                      </Row>
                      <Row>
                    <Col md='6' xs='12'>
                          <h1 className='text-center display-4'>Misión</h1>
                          <hr className="my-2" />
                          <p  align='justify'>
                            Somos un equipo de desarrollo que prima la funcionalidad y elegancia de sus productos que busca generar una ayuda a capacitadores de RRHH y nuevos empleados que requieren de una inducción a sus empleos. Ofreciendo una plataforma web de capacitación virtual sencilla e intuitiva para los empleados, y completa para los capacitadores, siendo un aporte en el mercado del CBT (Computer Based Training) siendo de interés para empresas de mediana envergadura que necesitan capacitar a varios empleados a la vez y de forma recurrente.
                          </p>
                        </Col>
                        <Col md='6' xs='12'>
                          <h1 className='text-center display-4'>Visión</h1>
                          <hr className="my-2" />
                          <p  align='justify'>
                            De aquí a finales de Junio del año 2019 nuestro proyecto, será una aplicación web para la capacitación de los empleados, ofreciendo una variedad para la formación de cada uno de los internos de la empresa.
                          </p>
                          <p  align='justify'>
                            Para tener éxito debemos trabajar como una organización, es por esto que la comunicación entre nosotros no puede fallar y debe ser uno de nuestros pilares fundamentales, también el enfoque y trabajo en equipo jugarán un papel importante para el desarrollo de nuestras actividades. Guiándonos por la disciplina, respeto e innovación.
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Jumbotron>
            </div>
            </div>
        );
    }
}

export default HomeContent;
