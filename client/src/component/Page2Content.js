import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
class Page2Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
    }

    render() {
        return (
            <div className="Page2Content" style={{'display':((this.state.isVisible)?'block':'none')}}>
<<<<<<< HEAD
              <p> pagina de estudio seguridad</p>
              <Jumbotron >
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
=======
              <Jumbotron >
                <h1 className="display-3">Módulo de Seguridad</h1>
                <hr className="my-2" />
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
>>>>>>> dev-Ivan
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <Button color="primary">Learn More</Button>
                </p>
              </Jumbotron>
            </div>
        );
    }
}

export default Page2Content;
