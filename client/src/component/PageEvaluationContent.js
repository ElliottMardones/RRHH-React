import React, { Component } from 'react';
import './PageEvaluationContent.css';
import { Jumbotron, Button, Row, Col, Card, Input, CardBody, CardTitle, Progress, CardText, Label, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup } from 'reactstrap';
import Axios from 'axios';


class PageEvaluationContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            questions: [],
            currentQuestion: null,
            progress: 0,
            answer: '',
            maxScore: 0,
            percentage: 0,
            aprove: false,
            result: {}
        }

        this.handleQuestionClick = this.handleQuestionClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.handleCompleteTest = this.handleCompleteTest.bind(this);
        this.toggle = this.toggle.bind(this);

    }

    onEntry() {
        Axios.get('/question/test/5d0af053b09a1d3a2c23c064')
            .then(
                (res) => {
                    const questions = this.props.stateApp.shuffle(
                        res.data.map(
                            (value) => (
                                {
                                    question: value,
                                    answer: ''
                                }
                            )
                        )
                    ).slice(0, 12);
                    let maxScore = 0
                    questions.forEach(
                        (value) => {
                            maxScore += value.question.score;
                        }
                    )
                    const currentQuestion = 0;
                    this.setState({ questions, currentQuestion, maxScore });
                }
            )
            .catch(console.log);
    }

    handleQuestionClick(event) {
        const answer = (this.state.questions[event.target.value - 1].answer !== '') ? this.state.questions[event.target.value - 1].answer : '';
        this.setState({
            currentQuestion: event.target.value - 1,
            answer
        });
    }

    handleNextClick(event) {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
            answer: this.state.questions[this.state.currentQuestion + 1].answer
        });
    }

    handleAnswerSelected(event) {
        const { questions } = this.state;
        questions[this.state.currentQuestion].answer = event.target.value;

        let progress = 0;
        questions.filter(e => e.answer !== '')
            .map(e => e.question.score)
            .forEach(e => { progress += e });
        this.setState({
            progress,
            questions,
            answer: event.target.value
        });
    }

    handleCompleteTest(event) {
        const { questions } = this.state;
        Axios.post('/test/evaluate/', { id: '5d0af053b09a1d3a2c23c064', questions })
            .then(
                (res) => {
                    this.setState(prevState => ({
                        modal: !prevState.modal
                    }))
                    const aprove = res.data.result.aprove;
                    const percentage = Math.floor(res.data.result.percentage);
                    this.setState({ aprove, percentage });
                }
            )
            .catch(console.log)
        /*
        
        let result = {}
        result.maxScore = this.state.maxScore;
        result.correct = 0
        result.omitted = 0
        result.incorrect = 0
        result.total = false
        result.percentage = 0
        const aResult = this.state.answers.map(answer => {
            if (this.state.questions[answer.indx].correctAnswer === answer.answer) {
                result.correct += 1;
                return "correct";
            } else if (answer.answer === '') {
                result.omitted += 1;
                return "omitted";
            } else {
                result.incorrect += 1;
                return "incorrect";
            }
        });
        result.scoreObtained = 0;
        aResult.forEach((answer, indx) => {
            console.log(answer);
            if (answer === "correct") {
                result.scoreObtained += this.state.questions[indx].score;
            }
        });
        result.calification = (70 * result.scoreObtained) / this.state.maxScore;

        result.percentage = ((result.correct) * 100) / 25
        this.setState({
            percentage: result.percentage,
        })

        console.log(result);
        if (result.correct >= 2) {
            result.total = true
            console.log(result.total)
            this.setState({
                res_final: result.total,
            })
        }
        else {
            console.log(result.total)
            this.setState({
                res_final: result.total,
            })
        }


        */
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    SaveDocument() {
        console.log("Guardando...")

    }
    ShowDocument() {
        console.log("Mostrando...")
    }


    render() {
        if (this.state.currentQuestion === null) return null;
        const answers = this.state.questions.map((value, index) => {
            return (
                <Card key={value.question._id} className="question" >
                    <CardBody className="text-center">
                        <p className="lead">
                            <Button color="primary" onClick={this.handleQuestionClick} value={index + 1}>{index + 1}</Button>
                        </p>
                        <hr className="my-2" />
                        {value.answer}
                    </CardBody>
                </Card >
            )
        });
        const progress = Math.trunc(this.state.progress * 100.0 / this.state.maxScore)
        return (
            <div className="PageEvaluationContent" style={{ 'display': ((this.state.isVisible) ? 'block' : 'none') }}>
                <Jumbotron >
                    <h1 className="display-4 text-center">Módulo de Evaluación  </h1>
                    <hr className="my-2" />
                    <Card>
                        <div className="text-center">{progress}%</div>
                        <Progress color={(progress < 30) ? 'danger' : ((progress !== 100) ? 'warning' : 'success')} value={progress} />
                    </Card>
                    <Row>
                        <Col md='4' xs='12'>
                            <Jumbotron fluid>
                                <Card>
                                    <CardBody>
                                        <CardTitle className='text-center'>Navegación del cuestionario.</CardTitle>
                                        <hr className="my-2" />
                                        <Row>
                                            {answers}
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
                                            <h1 className="display-4 text-center">Pregunta #{this.state.currentQuestion + 1}</h1>
                                        </CardTitle>
                                        <hr className="my-2" />
                                        <CardText>
                                            {this.state.questions[this.state.currentQuestion].question.body}
                                        </CardText>
                                        <hr className="my-2" />
                                        {this.state.questions[this.state.currentQuestion].question.a !== 'NONE' ? <CardText><Input id="a" addon type="radio" name='selection' checked={this.state.answer === 'a'} onChange={this.handleAnswerSelected} value="a" /><Label for="a">{this.state.questions[this.state.currentQuestion].question.a}</Label></CardText> : null}
                                        {this.state.questions[this.state.currentQuestion].question.b !== 'NONE' ? <CardText><Input id="b" addon type="radio" name='selection' checked={this.state.answer === 'b'} onChange={this.handleAnswerSelected} value="b" /><Label for="b">{this.state.questions[this.state.currentQuestion].question.b}</Label></CardText> : null}
                                        {this.state.questions[this.state.currentQuestion].question.c !== 'NONE' ? <CardText><Input id="c" addon type="radio" name='selection' checked={this.state.answer === 'c'} onChange={this.handleAnswerSelected} value="c" /><Label for="c">{this.state.questions[this.state.currentQuestion].question.c}</Label></CardText> : null}
                                        {this.state.questions[this.state.currentQuestion].question.d !== 'NONE' ? <CardText><Input id="d" addon type="radio" name='selection' checked={this.state.answer === 'd'} onChange={this.handleAnswerSelected} value="d" /><Label for="d">{this.state.questions[this.state.currentQuestion].question.d}</Label></CardText> : null}
                                        {this.state.questions[this.state.currentQuestion].question.e !== 'NONE' ? <CardText><Input id="e" addon type="radio" name='selection' checked={this.state.answer === 'e'} onChange={this.handleAnswerSelected} value="e" /><Label for="e">{this.state.questions[this.state.currentQuestion].question.e}</Label></CardText> : null}
                                        {this.state.aprove ? (
                                            <div>
                                                <center>
                                                    <Modal isOpen={this.state.modal} toggle={this.handleCompleteTest} className={this.props.className}>
                                                        <ModalHeader toggle={this.toggle}>Resultado</ModalHeader>
                                                        <ModalBody>
                                                            Porcentaje de Aciertos {this.state.percentage + '%'}, Estas Sobre el porcentaje minimo, estas Aprobado, Felicidades.
                                                </ModalBody>
                                                        <ModalFooter>
                                                            <ButtonGroup>
                                                                <Button color="primary" size="sm" onClick={this.toggle}>Aceptar</Button>
                                                            </ButtonGroup>
                                                        </ModalFooter>
                                                    </Modal>
                                                </center>
                                            </div>
                                        ) : (
                                                <div>
                                                    <Modal isOpen={this.state.modal} toggle={this.handleCompleteTest} className={this.props.className}>
                                                        <ModalHeader color="danger" toggle={this.toggle}>Resultado</ModalHeader>
                                                        <ModalBody>
                                                            Porcentaje de Aciertos {this.state.percentage + '%'}, No haz completado el minimo, estas Reprobado.
                                                </ModalBody>
                                                        <ModalFooter>
                                                            <ButtonGroup>
                                                                <Button color="primary" size="sm" onClick={this.toggle}>Confirmar</Button>
                                                            </ButtonGroup>
                                                        </ModalFooter>
                                                    </Modal>

                                                </div>
                                            )}
                                        < Button className="float-right" onClick={this.handleCompleteTest} color={(this.state.progress !== 100) ? 'danger' : 'success'}>Revisar</Button>
                                        {this.state.currentQuestion < (this.state.questions.length - 1) ? <Button className="float-right" color="primary" onClick={this.handleNextClick}>Siguiente</Button> : null}
                                    </CardBody>
                                </Card>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Jumbotron>
            </div >
        );
    }
}

export default PageEvaluationContent;
