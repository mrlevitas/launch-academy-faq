import React from 'react';
import QuestionTable from './QuestionTable';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Launch Academy FAQ</h1>
        <QuestionTable questions={this.props.data} />
      </div>
    )
  }
}

export default App;
