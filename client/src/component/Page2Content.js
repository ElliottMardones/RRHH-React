import React, { Component } from 'react';
import { Jumbotron, Card, Button, CardTitle, CardText, Row, Col,Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem, ButtonGroup,ButtonDropdown  } from 'reactstrap';
var menExtintor="Conocer sobre el manejo de extintores constituye un deber de todo trabajador en chile y tiene como objetivo dar respuesta rápida a un posible evento de fuego incipiente a Mago en ningún caso pretende que el trabajador actúen un siniestro poniendo en riesgo su vida Colchones Rosen lo entienden y así deja de manifiesto que la respuesta frente a un eventual siniestro debe ser siempre por parte de los bomberos, nunca por parte de los trabajadores de Colchones Rosen. Lo primordial es resguardarse en las zonas de seguridad definidas en los distintos puntos de la planta Sin embargo Rosen cuenta con una brigada de emergencias, la cual se encuentra preparada y constituida para enfrentar siniestros, la cual cuenta con los equipos necesarios y la capacitación correspondiente. Sin embargo, la brigada de incendios de Rosen es solo para contener EL SINIESTRO, hasta que lleguen al lugar los bomberos."
var menTriangulofuego="Triángulo de fuego: El fuego puede ser representado por un triángulo equilátero llamado triángulo del fuego, en el que se simbolizan en cada uno de sus lados los factores esenciales para que el mismo exista. Combustible: es toda sustancia susceptible de arde, estamos rodeados de materiales combustibles, por ejemplo: maderas, gasolina, gas licuado, productos, químicos, espumas, fibras, materiales textiles, etc.Calor: es la transferencia de energía entre diferentes cuerpos o diferentes zonas de un mismo cuerpo que se encuentran a distintas temperaturas. Este flujo siempre ocurre desde el cuerpo de mayor temperatura hace el cuerpo de menor temperatura, ocurriendo la transferencia de calor hasta que ambos cuerpos se encuentren en equilibrio térmico.Oxígeno: EL oxígeno representa aproximadamente el 20,9% en volumen de las composición de la atmósfera terrestre en altura del nivel del mar.    Es un gas incoloro, inodoro (sin olor), La reacción de combustible puede llevarse a cabo directamente con el oxígeno o bien con una mezcla de sustancias que contengan oxígeno, llamada “comburente”, siendo el aire atmosférico el comburente más habitual."
var menCadena="REACCIÓN EN CADENA.Cuando una sustancia se calienta, está desprende vapores y gases, los cuales se combina con el oxígeno del aire que en presencia de una fuente de ignición arden. En el momento en que estos vapores arden, se libera gran cantidad de calor.  Si el calor es comprendido no es suficiente para generar más vapores del material combustible, el fuego se apaga.Si la cantidad de calor desprendida es elevada, el material combustible sigue descomponiéndose y desprendiendo más vapores que se combinan con el oxígeno, se inflaman, y el fuego aumenta, verificando la reacción en cadena.CÓMO DETENER LA REACCIÓN EN CADENA.La reacción en cadena es posible detener, aplicando al fuego sustancias químicas especiales, que producen reacciones complejas que inhiben el proceso.Ejemplos: Polvo químico seco (P.Q.S)"
class Page2Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }
    toggle(){
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }

  onRadioBtnClick(infoactual) {
    this.setState({infoactual});
  }

    render() {
        return (
            <div className="Page2Content" style={{'display':((this.state.isVisible)?'block':'none')}}>
              <Jumbotron>
                <h1 className="display-3">Pagina de Seguridad</h1>
                <hr className="my-2" />
                  <Row>
                    <Col sm="1.5">
                      <Card body>
                        <CardTitle>Menu</CardTitle>
                        <CardText>
                          <ButtonGroup vertical>

                            <ButtonDropdown direction="down" isOpen={this.state.btnDropOne} toggle={() => { this.setState({ btnDropOne: !this.state.btnDropOne }); }}>
                              <DropdownToggle onClick={() => this.onRadioBtnClick(menExtintor)} caret>
                                Extintor
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem onClick={() => this.onRadioBtnClick(menTriangulofuego)}>Triangulo de Fuego</DropdownItem>
                                <DropdownItem onClick={() => this.onRadioBtnClick(menCadena)}>Reaccion en Cadena</DropdownItem>
                              </DropdownMenu>
                            </ButtonDropdown>

                            <ButtonDropdown direction="down" isOpen={this.state.btnDropTwo} toggle={() => { this.setState({ btnDropTwo : !this.state.btnDropTwo }); }}>
                                <DropdownToggle onClick={() => this.onRadioBtnClick(2.0)} caret>
                                Informacion Seguridad 2
                                </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem onClick={() => this.onRadioBtnClick(2.1)}>Informacion 2.1</DropdownItem>
                                <DropdownItem onClick={() => this.onRadioBtnClick(2.2)}>Informacion 2.2</DropdownItem>
                              </DropdownMenu>
                            </ButtonDropdown>

                            <ButtonDropdown direction="down" isOpen={this.state.btnDropThree} toggle={() => { this.setState({ btnDropThree : !this.state.btnDropThree }); }}>
                              <DropdownToggle onClick={() => this.onRadioBtnClick(3.0)} caret>
                                Informacion Seguridad 3
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem onClick={() => this.onRadioBtnClick(3.1)}>Informacion 3.1</DropdownItem>
                                <DropdownItem onClick={() => this.onRadioBtnClick(3.2)}>Informacion 3.2</DropdownItem>
                              </DropdownMenu>
                            </ButtonDropdown>
                            <ButtonDropdown direction="down" isOpen={this.state.btnDropFour} toggle={() => { this.setState({ btnDropFour : !this.state.btnDropFour }); }}>
                              <DropdownToggle onClick={() => this.onRadioBtnClick(4.0)} caret>
                                Informacion Seguridad 4
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem onClick={() => this.onRadioBtnClick(4.1)}>Informacion 4.1</DropdownItem>
                                <DropdownItem onClick={() => this.onRadioBtnClick(4.2)}>Informacion 4.2</DropdownItem>
                              </DropdownMenu>
                            </ButtonDropdown>
                          </ButtonGroup>
                        </CardText>

                      </Card>
                    </Col>

                    <Col sm="6">
                      <Card body>
                        <CardTitle>Información Seleccionada</CardTitle>
                        <hr className="my-2" />
                        <CardText>
                          <p>{this.state.infoactual}</p>
                        </CardText>
                      </Card>
                    </Col>
                  </Row>
                </Jumbotron>
            </div>
        );
    }
}

export default Page2Content;
