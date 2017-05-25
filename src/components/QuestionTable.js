import React from 'react';
import Question from './Question.js';

class QuestionTable extends React.Component {
  constructor(props) {
    super(props);
  }

  renderQuestions(questions) {
      if (questions.length > 0) {
          return questions.map((question, index) => (
              <Question key={index} data={question} />
          ));
      }
      else return [];
  }

  render() {
    var rows = [];

    rows = this.renderQuestions(this.props.questions)

    return (
        <div>{rows}</div>
    );
  }
}

export default QuestionTable;
