import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state={
    markdown: '',
  }

  handleChange = (a) =>{
    this.setState({
      markdown: a.target.value,
    })
  }

  render() {
    const {markdown} = this.state;
  
    return (
      <div className="App-header">
        <h1>Convert Your Markdown</h1>
        <div className="row">
          <div className="col-6">
            <textarea id="editor" value={markdown} onChange={this.handleChange}/>
          </div>
          <div className="col-6" id="preview">
            <p>Testing Testing</p>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
