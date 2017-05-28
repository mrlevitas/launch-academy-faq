import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.state = { isAnswerDisplayed: false };
  }

  handleToggleClick() {
    this.setState({ isAnswerDisplayed: !this.state.isAnswerDisplayed });
  }

  render() {
    const isAnswerDisplayed = this.state.isAnswerDisplayed;

    let answer = null;
    let button = null;

    if (isAnswerDisplayed) {
      answer = <div>{this.props.data.answer}</div>
      button = <button onClick={this.handleToggleClick} color="#3d9648">-</button>
    } else {
      button = <button onClick={this.handleToggleClick} color="#444547">+</button>
    }

    return (
        <div id={this.props.data.id}>
          {button}
          <h2>{this.props.data.question}</h2>
          {answer}
        </div>

    );
  }

}

export default Question;
