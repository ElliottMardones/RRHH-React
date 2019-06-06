import React, { Component } from 'react';
import './PageEvaluationContent.css';
import { Jumbotron, Button, Row, Col , Card, Input, CardBody, CardTitle, Progress, CardText, ListGroup, ListGroupItem} from 'reactstrap';
class PageEvaluationContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            questions: [],
            currentQuestion: {},
            answers: []
        }
        this.handleQuestionClick = this.handleQuestionClick.bind(this);
    }

    handleQuestionClick(event){
        this.setState({
            currentQuestion: this.state.questions[event.target.value - 1]   
        });
    }

    render() {
        // aquí se debe hacer la consulta a la DB sobre las preguntas del cuestionario.
        this.state.questions = new Array(parseInt(this.props.nQuestions));
        this.state.answers = new Array(parseInt(this.props.nQuestions));
        for (var i = 0; i < this.state.answers.length; i++) {
            var temp = new Object();
            var temp2 = new Object();
            temp2.indx = i;
            temp2.qBody = "The question #"+ (i+1).toString();
            temp2.a = "The Response a";
            temp2.b = "The Response b";
            temp2.c = "The Response c";
            temp2.d = "The Response d";
            temp2.e = "The Response e";
            temp.answer = false;
            this.state.answers[i] = JSON.stringify(temp);
            this.state.questions[i] = temp2;
        }
        //
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
                <Card>
                <div className="text-center">25%</div>
                <Progress value="0"/>
                </Card>
                <Row>                
                    <Col md='4' xs='12'>
                        <Jumbotron fluid>
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
                        <Jumbotron fluid>
                        <Card>
                        <CardBody>
                            <CardTitle>
                                <h1 className="display-4 text-center">Pregunta #{((this.state.currentQuestion.indx == null)?'':(this.state.currentQuestion.indx + 1))}</h1>
                            </CardTitle>
                            <hr className="my-2" />
                            <CardText>
                                { this.state.currentQuestion.qBody }
                            </CardText>
                            <hr className="my-2" />
                            <CardText><Input addon type="radio" name='selection' aria-label="Checkbox for following text input" />{ this.state.currentQuestion.a }</CardText>
                            <CardText><Input addon type="radio" name='selection' aria-label="Checkbox for following text input" />{ this.state.currentQuestion.b }</CardText>
                            <CardText><Input addon type="radio" name='selection' aria-label="Checkbox for following text input" />{ this.state.currentQuestion.c }</CardText>
                            <CardText><Input addon type="radio" name='selection' aria-label="Checkbox for following text input" />{ this.state.currentQuestion.d }</CardText>
                            <CardText><Input addon type="radio" name='selection' aria-label="Checkbox for following text input" />{ this.state.currentQuestion.e }</CardText>
                        </CardBody>    
                        </Card>
                        </Jumbotron>
                    </Col>
                </Row>
              </Jumbotron>
            </div>
        );
    }
}

export default PageEvaluationContent;
