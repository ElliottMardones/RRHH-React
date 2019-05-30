import React, { Component } from 'react';
import './PageEvaluationContent.css';
import { Jumbotron, Button, Row, Col , Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
class PageEvaluationContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            answers: [],
            question: ''
        }
        this.handleQuestionClick = this.handleQuestionClick.bind(this);
    }

    handleQuestionClick(event){
        this.setState({
            question: event.target.value
        });
    }

    render() {
        this.state.answers = new Array(parseInt(this.props.nQuestions));
        for (var i = 0; i < this.state.answers.length; i++) {
            var temp = new Object();
            temp.answer = false;
            this.state.answers[i] = JSON.stringify(temp);
        }
        const answers = this.state.answers.map((answer, indx) =>{
            return (
                <Card className="question">
                    <CardBody>
                        <p className="lead">
                            <Button color="primary" onClick={this.handleQuestionClick} value={ indx + 1}>{ indx + 1}</Button>
                        </p>
                        <hr className="my-2" />
                        {answer.answer}
                    </CardBody>
                </Card>
            )
        });
        return (
            <div className="PageEvaluationContent" style={{'display':((this.state.isVisible)?'block':'none')}}>
              <Jumbotron >
                <h1 className="display-4 text-center">Módulo de Evaluación</h1>
                <hr className="my-2" />
                <Row>
                    <Col md='4' xs='12'>
                        <Jumbotron>
                            <Card>
                                <CardBody>
                                    <CardTitle className='text-center'>Navegación del cuestionario.</CardTitle>
                                    <hr className="my-2" />
                                    <Row>
                                        { answers }
                                    </Row>
                                </CardBody>
                            </Card>

                        </Jumbotron>
                    </Col>
                    <Col md='8' xs='12'>
                        <h1 className="display-4 text-center">Pregunta #{this.state.question}</h1>
                        <hr className="my-2" />
                    </Col>
                </Row>
              </Jumbotron>
            </div>
        );
    }
}

export default PageEvaluationContent;
