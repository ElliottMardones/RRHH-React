import React, { Component } from 'react';
import { Jumbotron, 
    Card,
    CardImg, 
    CardTitle,
    Row, 
    Col, 
    DropdownToggle,
    DropdownMenu, 
    DropdownItem, 
    ButtonGroup,
    ButtonDropdown,
    Media
} from 'reactstrap';

import { infoSeguridad } from '../info/infoSeguridad';
class Page2Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            dropdownOpen: [],
            infoSeguridad: infoSeguridad,
            currentInfo: {},
            currentList: null,
            currentOthers: null,
            currentDefinitions: null,
            currentImg: null
        }
        this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }
    toggle(){
    this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen,
    }))
  }

  componentDidMount(){
    this.state.infoSeguridad.forEach((option)=>{
        let dropdownOpen = this.state.dropdownOpen;
        dropdownOpen = dropdownOpen.concat(false);
        this.setState({
            dropdownOpen: dropdownOpen
        });
    });
  }

  onRadioBtnClick(infoactual) {
    let currentList = null;
    let currentOthers = null;
    let currentDefinitions = null;
    if(infoactual.lists!==null){
        currentList = infoactual.lists.map((option, indx)=>{
            let options = option.options.map((option, indx)=>{
                return(<li key={"li"+indx}>{ option }</li>);
            });
            return(
                <div key={"div"+indx}>
                    <p>{ option.description }</p>
                    <ul align='justify' key={"ul"+indx}>
                        { options }
                    </ul>
                </div>
                );
        });
    }
    if(infoactual.others!==null){
        currentOthers = infoactual.others.map((option, indx)=>{
            return(
                <p align='justify' key={"p1"+indx}>{ option }</p>
            );
        });
    }
    if(infoactual.definitions!==null){
        currentDefinitions = infoactual.definitions.map((option, indx)=>{
            return(
               <p align='justify' key={"p2"+indx}><span style={{fontWeight: "bold"}}>{ option.name }</span> { option.definition }</p>
            );
        });
    }
    const images = require.context('../media', true);
    let img = images('./'+ infoactual.imgPath);
    this.setState({
        currentInfo: infoactual,
        currentList: currentList,
        currentOthers: currentOthers,
        currentDefinitions: currentDefinitions,
        currentImg: img
    });
  }

    render() {
        const Menu = this.state.infoSeguridad.map((option, indx)=>{
            let subtemas = null;
            if(Array.isArray(option.description)){
                subtemas = option.description.map((subtema, indx)=>{
                    return(
                            <DropdownItem key={"dBtn"+indx} onClick={() => this.onRadioBtnClick(subtema)}>{ subtema.title }</DropdownItem>
                        )
                });
            }
            return (
                <ButtonDropdown key={indx} direction="down" isOpen={this.state.dropdownOpen[indx]} toggle={() => {
                    let dropdownOpen = this.state.dropdownOpen;
                    dropdownOpen[indx] = !dropdownOpen[indx];
                    this.setState({ dropdownOpen: dropdownOpen}); 
                }}>
                    <DropdownToggle caret>
                        {option.title}
                    </DropdownToggle>
                    <DropdownMenu>
                        {subtemas}
                    </DropdownMenu>
                </ButtonDropdown>
            );
        });



        return (
            <div className="Page2Content" style={{'display':((this.state.isVisible)?'block':'none')}}>
              <Jumbotron>
                <h1 className="display-4 text-center">Módulo de Seguridad</h1>
                <hr className="my-2" />
                  <Row>
                    <Col md="3" sm="12">
                      <Card body>
                        <CardTitle className="text-center">Menú</CardTitle>
                        <div>
                          <ButtonGroup vertical>
                            { Menu }
                          </ButtonGroup>
                        </div>

                      </Card>
                    </Col>

                    <Col md="6" sm="12">
                      <Card body>
                        <CardTitle><h4 className=" text-center">{ (this.state.currentInfo.title!==undefined)?this.state.currentInfo.title : "Bienvenido a la sección de Seguridad" }</h4></CardTitle>
                        <hr className="my-2" />
                        <div>
                            <p>{
                                (this.state.currentInfo.description!==undefined)?this.state.currentInfo.description : "Selecciona algún tema que desees revisar."
                            }</p>
                        </div>
                        <div>{ (this.state.currentDefinitions!==null)?this.state.currentDefinitions:'' }</div>
                        { (this.state.currentList!==null)?this.state.currentList:'' }
                        <div>{ (this.state.currentOthers!==null)?this.state.currentOthers:'' }</div>
                      </Card>
                    </Col>


                    <Col md="3" sm="12">
                        <Card>
                                <CardImg top src={this.state.currentImg} atl="imagen" />
                            </Card>
                        
                    </Col>
                  </Row>
                </Jumbotron>
            </div>
        );
    }
}

export default Page2Content;