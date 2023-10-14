import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            display: '',
            equation: '',
            history: null, // Store the most recent calculation
        };
    }

    handleButtonClick = (value) => {
        if (value === '.' && this.state.display.includes('.')) {
            return;
        }

        if (this.state.display === '0' || this.state.display === 'Error') {
            this.setState({ display: value });
        } else {
            this.setState((prevState) => ({
                display: prevState.display + value,
            }));
        }
    };

    handleEvaluate = () => {
        try {
            const result = eval(this.state.display);
            const newHistoryItem = {
                equation: this.state.display,
                result: result,
            };
            this.setState({
                display: result,
                equation: result,
                history: newHistoryItem, // Store the most recent calculation
            });
        } catch (error) {
            this.setState({ display: 'Error' });
        }
    };

    handleBackspace = () => {
        const currentDisplay = this.state.display;
        if (currentDisplay.length > 1) {
            const newDisplay = currentDisplay.slice(0, -1);
            this.setState({ display: newDisplay });
        } else {
            this.setState({ display: '0' });
        }
    };

    render() {
        return (
            <div className=" position-absolute top-50 start-50 translate-middle " style={{ width: "18rem", backgroundColor: "#040c2c", borderRadius: "25px" }}>
                <br></br>
              

                
                
                {/* Display the most recent history item */}
                <div className="history position-absolute text-end " style={{ backgroundColor: "#040c2c", color: "white", width: "18rem" ,height:"20px"}}>
                <div className='dott '/>
                    {this.state.history ? (
                        <div>
                            <p>{this.state.history.equation} </p>
                        </div>
                    ) : (
                        <p>No history yet.</p>
                    )}
                </div>
                <br></br>
                <br></br>
                <div className="display" style={{ width: "18rem", height: "10rem", backgroundColor: "#172d67", borderColor: "#172d67", color: "white" }}>{this.state.display}</div>
                <center>
                    <div>
                        <div className='row g-2'>
                            <div className="buttons col-8 ms-3">
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('7')}><h3>7</h3></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('8')}><h3>8</h3></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('9')}><h3>9</h3></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('4')}><h3>4</h3></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('5')}><h3>5</h3></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('6')}><h3>6</h3></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('1')}><h3>1</h3></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('2')}><h3>2</h3></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('3')}><h3>3</h3></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('0')}><h3>0</h3></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('.')}><h3>.</h3></button>
                                <button type="button" style={{ color: "white" }} className="btn " onClick={this.handleEvaluate}><h4>=</h4></button>
                            </div>
                            <div className='col-2 buttonss' style={{ backgroundColor: "#040c2c" }}>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={this.handleBackspace}><h4>⌫</h4></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('/')}><h4>÷</h4></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('*')}><h4>×</h4></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('-')}><h4>-</h4></button>
                                <button type="button" style={{ color: "white" }} className="btn" onClick={() => this.handleButtonClick('+')}><h4>+</h4></button>
                            </div>
                        </div>
                    </div>
                </center>
                <br></br>

                
            </div>
        );
    }
}

export default Calculator;
