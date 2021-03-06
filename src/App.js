import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';


const initalState = `
  Welcome to markdown previewer.

  ## Code blocks
  \`\`\`
  const getFunky = (you) => {
    you ? 'lets boogie' : 'maybe next time, pal.'
  }
  \`\`\`

  ## Block Codes... or Quote's is it?

  > They say time stands still...
  > Until the author stands ill..
  > Or perhaps time sits on the sil...
  > Until it's had it's fill...

  ## Images
  ![random cool image](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XDUweOQ0UMr08MbHOm8laAHaEo%26pid%3DApi&f=1)

  # Things you can do
  * You can play with **headings** using #
  * You can test **[links]**(https://www.sethlewandowski.com)
  * You can play with \`<div>**code**</div>\`
  * And even carriage returns like this 
  * Now you see me \r now you don't

`;


class App extends React.Component {
  state={
    text: initalState,
  }

  handleChange = (a) =>{
    this.setState({
      text: a.target.value,
    })
  }

  getMarkdownText() {
    const rawMarkup = marked(this.state.text, {breaks: true});
    return { __html: rawMarkup };
  }

  render() {
    const {text} = this.state;

    const markdown = marked(text, {sanitize: true});
  
    return (
      <div className="App-header">
        <div id="title" className="col-12">
          <h1>Convert Markdown</h1>
        </div>
        <div className="row">
          <div id="markdown" className="col-sm-12 col-md-6">
            <h3>Enter Markdown</h3>
            <textarea className="form-control" id="editor" value={text} onChange={this.handleChange}/>
          </div>
          <div id="result" className="col-sm-12 col-md-6">
            <h3>See Result</h3>
            <div className="rounded preview">
              <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()}></div>
            </div>
          </div>
        </div>
        <p className="footer">by <a href="https://www.sethlewandowski.com">Seth Lewandowski</a></p>
      </div>
    )
  }
}


export default App;
