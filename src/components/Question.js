import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id={this.props.data.id}>{this.props.data.question}
          <div>{this.props.data.answer}</div>
        </div>

    );
  }

}

export default Question;
