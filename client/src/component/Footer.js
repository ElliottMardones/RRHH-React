import React, { Component } from 'react';

import {
	Container,
	Col,
	Row
} from 'reactstrap';


class Footer extends Component {
<<<<<<< HEAD
	render() {
		return (
			<div className="Footer">
				<div className="footer">
					<Container fluid>
						<Container>
							<Row>
								<Col md={{ size: 6, offset: 5 }} xs={{ size: 10, offset: 3 }} lg={{ size: 6, offset: 4 }}>
									<h4 >Contactenos</h4>
									<i className="fa fa-phone fa-lg"></i>: +56974861243<br />
									<i className="fa fa-envelope fa-lg"></i>:UCT@gmail.com
            		      	<h5> Siguenos en:</h5>
									<i className="fa fa-facebook fa-lg"></i>: Los Topoyiyo<br />
									<i className="fa fa-twitter fa-lg"></i>: Los Topoyiyos twitter<br />
								</Col>
							</Row>
						</Container>
						<hr className="my-2" />
						<Row>
							<Col md={{ size: 6, offset: 5 }} xs={{ size: 10, offset: 2 }} lg={{ size: 6, offset: 5 }}><p>©Copyright: UCT Informatica</p></Col>
						</Row>
					</Container>
					<br />
				</div>
			</div>
		);
	}
=======
    constructor(props) {
        super(props);

        this.state = {
            isVisible: true
        }
    }

    render() {
        return (
            <div className="Footer" style={{'display':((this.state.isVisible)?'block':'none')}}>
            	<div className="footer">
            		<Container fluid>
                	<Container>
            	      <Row >
            	        <Col md={{size:6,offset:5}} xs={{size:10, offset:3}} lg={{size:6,offset:4}}>
            		      	<h4 >Contactenos</h4>
            					  <i className="fa fa-phone fa-lg"></i>: +56974861243<br/>
                      	<i className="fa fa-envelope fa-lg"></i>:UCT@gmail.com
            		      	<h5> Siguenos en:</h5>
            		     		<i className="fa fa-facebook fa-lg"></i>: Los Topoyiyo<br/>
            				    <i className="fa fa-twitter fa-lg"></i>: Los Topoyiyos twitter<br/>
            					</Col>
										</Row>
            	    </Container>
                  <hr className="my-2" />
                  <Row>
            				<Col md={{size:6,offset:5}} xs={{size:10, offset:2}} lg={{size:6,offset:5}}><p>©Copyright: UCT Informatica</p></Col>
                  </Row>
								</Container>
            		<br/>
            	</div>
            </div>
        );
    }
>>>>>>> dev-Ivan
}

export default Footer;
