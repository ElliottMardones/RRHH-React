import React, { Component } from 'react';
import './PageEvaluationContent.css';
import { Jumbotron, Button, Row, Col , Card, Input, CardBody, CardTitle, Progress, CardText, Label,Modal, ModalHeader, ModalBody, ModalFooter,ButtonGroup } from 'reactstrap';


class PageEvaluationContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            questions: [],
            currentQuestion: {},
            answers: [],
            progress: 0,
            answer: '',
            maxScore: 0,
            result: {}
        }

        this.handleQuestionClick = this.handleQuestionClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.handleCompleteTest = this.handleCompleteTest.bind(this);
        this.toggle = this.toggle.bind(this);

    }
    
    componentDidMount() {
        let answers = this.state.answers;
        let questions = this.state.questions;
        let maxScore = 0;
        for (var i = 0; i < this.props.nQuestions; i++) {
            var temp = {};
            var temp2 = {};
            temp2.indx = i;
            temp2.qBody = "The question #"+ (i+1).toString();
            temp2.a = "The Response a";
            temp2.b = "The Response b";
            temp2.c = "The Response c";
            temp2.d = "The Response d";
            temp2.e = "The Response e";
            temp2.correctAnswer = ['a', 'b', 'c', 'd', 'e'][Math.floor(Math.random() * 5)];
            temp2.score = Math.floor(Math.random() * 10);
            maxScore += temp2.score;
            temp.indx = i;
            temp.answer = '';
            answers = answers.concat(temp);
            questions = questions.concat(temp2);
        };
        this.setState({
            answers: answers,
            questions: questions,
            currentQuestion: questions[0],
            maxScore: maxScore
        });
    }


    onAnswered(){
        let progress = this.state.progress + 1;
        let answered = this.state.answers.filter(function(answer) {
            return answer.answer !== '';
        });
        progress = Math.trunc(((answered.length) / this.props.nQuestions)*100);
        return progress;
    }

    handleQuestionClick(event){
        let answer = (this.state.answers[event.target.value - 1].answer !== '')?this.state.answers[event.target.value - 1].answer:'';
        this.setState({
            currentQuestion: this.state.questions[event.target.value - 1],
            answer: answer
        });
    }

    handleNextClick(event){
        if(this.state.currentQuestion.indx < 24){
            this.setState({
                currentQuestion: this.state.questions[this.state.currentQuestion.indx+1],
                answer: ''
            });
        }
    }

    handleAnswerSelected(event){
        const answers = this.state.answers;
        answers[this.state.currentQuestion.indx].answer = event.target.value;
        this.setState({
            answers: answers,
            answer: event.target.value
        });
        const progress = this.onAnswered();
        this.setState({
            progress: progress
        });
    }

    handleCompleteTest(event){
        this.setState(prevState => ({
          modal:!prevState.modal
        }))
        let result = {}
        result.maxScore = this.state.maxScore;
        result.correct = 0
        result.omitted = 0
        result.incorrect = 0
        result.total = false
        result.percentage = 0
        const aResult = this.state.answers.map(answer => {
            if(this.state.questions[answer.indx].correctAnswer === answer.answer){
                result.correct +=1 ;
                return "correct";
            }else if(answer.answer === ''){
                result.omitted +=1 ;
                 return "omitted";
            }else{
                result.incorrect +=1 ;
                return "incorrect";
            }
        });
        result.scoreObtained = 0;
        aResult.forEach((answer, indx) => {
            console.log(answer);
            if(answer === "correct"){
                result.scoreObtained += this.state.questions[indx].score;
            }
        });
        result.calification = (70*result.scoreObtained)/this.state.maxScore;
        
        result.percentage = ((result.correct)*100)/25
        this.setState({
            percentage: result.percentage,
        })
        
        console.log(result);
        if (result.correct>=2) {
            result.total=true
            console.log(result.total)
            this.setState({
                res_final: result.total,
            })
        }
        else{
            console.log(result.total)
            this.setState({
                res_final: result.total,
            })
        }


        
    }
    toggle(){
        this.setState(prevState => ({
          modal:!prevState.modal
        }))
    }

    SaveDocument(){
        console.log("Guardando...")

    }
    ShowDocument(){
        console.log("Mostrando...")
    }


    render() {
        const answers = this.state.answers.map(answer =>{
            return (
                <Card key={answer.indx} className="question">
                    <CardBody className="text-center">
                        <p className="lead">
                            <Button color="primary" onClick={this.handleQuestionClick} value={ answer.indx + 1}>{ answer.indx + 1}</Button>
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
                <h1 className="display-4 text-center">Módulo de Evaluación  </h1>
                <hr className="my-2" />
                <Card>
                <div className="text-center">{ this.state.progress }%</div>
                <Progress color = { (this.state.progress < 30)?'danger':((this.state.progress !== 100)?'warning':'success') } value={ this.state.progress }/>
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
                                        <h1 className="display-4 text-center">Pregunta #{((this.state.currentQuestion.indx == null)?'1':(this.state.currentQuestion.indx + 1))}</h1>
                                    </CardTitle>
                                    <hr className="my-2" />
                                    <CardText>
                                        { this.state.currentQuestion.qBody }
                                    </CardText>
                                    <hr className="my-2" />
                                    <CardText><Input id="a" addon type="radio" name='selection' checked={ this.state.answer === 'a' } onChange={ this.handleAnswerSelected } value="a"/><Label for="a">{ this.state.currentQuestion.a }</Label></CardText>
                                    <CardText><Input id="b" addon type="radio" name='selection' checked={ this.state.answer === 'b' } onChange={ this.handleAnswerSelected } value="b"/><Label for="b">{ this.state.currentQuestion.b }</Label></CardText>
                                    <CardText><Input id="c" addon type="radio" name='selection' checked={ this.state.answer === 'c' } onChange={ this.handleAnswerSelected } value="c"/><Label for="c">{ this.state.currentQuestion.c }</Label></CardText>
                                    <CardText><Input id="d" addon type="radio" name='selection' checked={ this.state.answer === 'd' } onChange={ this.handleAnswerSelected } value="d"/><Label for="d">{ this.state.currentQuestion.d }</Label></CardText>
                                    <CardText><Input id="e" addon type="radio" name='selection' checked={ this.state.answer === 'e' } onChange={ this.handleAnswerSelected } value="e"/><Label for="e">{ this.state.currentQuestion.e }</Label></CardText>
                                    {this.state.res_final? (
                                        <div>
                                        <center>
                                            <Modal isOpen={this.state.modal} toggle={this.handleCompleteTest} className={this.props.className}>
                                                <ModalHeader toggle={this.toggle}>Resultado</ModalHeader>
                                                <ModalBody>
                                                    Porcentaje de Aciertos {this.state.percentage} %, Estas Sobre el porcentaje minimo, estas Aprobado, Felicidades.
                                                </ModalBody>
                                                <ModalFooter>
                                                    <ButtonGroup>
                                                        <Button color ="primary" size="sm" onClick={this.toggle}>Aceptar</Button>{' '}
                                                        <Button color = "primary"  size="sm" onClick={this.ShowDocument}>Mostrar Documento</Button>
                                                        <Button color = "primary"  size="sm" onClick={this.SaveDocument}>Guardar PDF</Button>
                                                    </ButtonGroup>
                                                </ModalFooter>
                                            </Modal>
                                         </center>
                                            </div>
                                    ): (
                                        <div>
                                            <Modal isOpen={this.state.modal} toggle={this.handleCompleteTest} className={this.props.className}>
                                                <ModalHeader color="danger" toggle={this.toggle}>Resultado</ModalHeader>
                                                <ModalBody>
                                                    Porcentaje de Aciertos {this.state.percentage} %, No haz completado el minimo, estas Reprobado.
                                                </ModalBody>
                                                <ModalFooter>
                                                    <ButtonGroup>
                                                        <Button color="primary" size="sm" onClick={this.toggle}>Confirmar</Button>{' '}
                                                        <Button color = "primary" size="sm" onClick={this.ShowDocument}>Mostrar Documento</Button>
                                                        <Button color = "primary" size="sm" onClick={this.SaveDocument}>Guardar PDF</Button>
                                                        
                                                    </ButtonGroup>
                                                </ModalFooter>
                                            </Modal>
                                        
                                        </div>
                                    )}
                                    <Button className="float-right" onClick={ this.handleCompleteTest } color={ (this.state.progress !== 100)?'danger':'success' }>Revisar</Button>
                                    <Button className="float-right" color="primary" onClick={ this.handleNextClick }>Siguiente</Button>
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
