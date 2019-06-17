import React, { Component } from 'react';
import {
  Jumbotron, Card, CardTitle, Row, Col, DropdownToggle,
  DropdownMenu, DropdownItem, ButtonGroup, ButtonDropdown
} from 'reactstrap';

var menEnergia = "En física, se define como la capacidad de realizar un trabajo. En tecnología, economía y la definición que se utiliza en este campo se refiere al recurso natural que se transforma y se le da un uso industrial. Ejemplo, Electricidad, combustible, vapor calor, aire comprimido, etc";
var menUsoEnergia = "Forma o tipo de aplicación de la energía (ventilador, iluminación, transporte, etc.). Para alcanzará la eficiencia energética implica la estandarización de procedimientos y procesos que permitan dar respuestas a la reducción del consumo energético, a través de mejores prácticas y acorde a las nuevas tecnologías. Siempre será el ideal consumir sin desperdiciarlas, y así se podrán realizar más actividades con los mismos recursos y mejorar la calidad de vida de las personas, manteniendo equilibrio y armonía con el medio ambiente."
var menEfiEnergetica = "Es el uso inteligente de la energía, consumir energía sin desperdiciarla. A través de ella se pueden realizar más actividades como la misma energía y mejorar nuestra calidad de vida, manteniendo equilibrio y armonía con el medio ambiente."
class Page1Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      dropdownOpen: false
    }

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }

  onRadioBtnClick(infoactual) {
    this.setState({ infoactual });
  }



  render() {
    return (
      <div className="Page1Content" style={{ 'display': ((this.state.isVisible) ? 'block' : 'none') }}>

        <Jumbotron>
          <h1 className="display-3">Pagina de Trabajo</h1>
          <hr className="my-2" />
          <Row>
            <Col sm="1.5">
              <Card body>
                <CardTitle>Menu</CardTitle>
                <div>
                  <ButtonGroup vertical>
                    <ButtonDropdown direction="down" isOpen={this.state.btnDropOne} toggle={() => { this.setState({ btnDropOne: !this.state.btnDropOne }); }}>
                      <DropdownToggle onClick={() => this.onRadioBtnClick(menEfiEnergetica)} caret>
                        Eficencia Energetica
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={() => this.onRadioBtnClick(menEnergia)}>Energía</DropdownItem>
                        <DropdownItem onClick={() => this.onRadioBtnClick(menUsoEnergia)}>Uso de Energía</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>

                    <ButtonDropdown direction="down" isOpen={this.state.btnDropTwo} toggle={() => { this.setState({ btnDropTwo: !this.state.btnDropTwo }); }}>
                      <DropdownToggle onClick={() => this.onRadioBtnClick(2.0)} caret>
                        Informacion Trabajo 2
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={() => this.onRadioBtnClick(2.1)}>Informacion 2.1</DropdownItem>
                        <DropdownItem onClick={() => this.onRadioBtnClick(2.2)}>Informacion 2.2</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown direction="down" isOpen={this.state.btnDropThree} toggle={() => { this.setState({ btnDropThree: !this.state.btnDropThree }); }}>
                      <DropdownToggle onClick={() => this.onRadioBtnClick(3.0)} caret>
                        Informacion Trabajo 3
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={() => this.onRadioBtnClick(3.1)}>Informacion 3.1</DropdownItem>
                        <DropdownItem onClick={() => this.onRadioBtnClick(3.2)}>Informacion 3.2</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown direction="down" isOpen={this.state.btnDropFour} toggle={() => { this.setState({ btnDropFour: !this.state.btnDropFour }); }}>
                      <DropdownToggle onClick={() => this.onRadioBtnClick(4.0)} caret>
                        Informacion Trabajo 4
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={() => this.onRadioBtnClick(4.1)}>Informacion 4.1</DropdownItem>
                        <DropdownItem onClick={() => this.onRadioBtnClick(4.2)}>Informacion 4.2</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ButtonGroup>
                </div>

              </Card>
            </Col>

            <Col sm="6">
              <Card body>
                <CardTitle>Información Seleccionada</CardTitle>
                <hr className="my-2" />
                <div>
                  <p>{this.state.infoactual}</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Jumbotron>
      </div>

    );
  }
}

export default Page1Content;