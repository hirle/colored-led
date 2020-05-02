import React from 'react';
import './App.css';
import { SketchPicker, ColorResult } from 'react-color'
import ColoredLed from './ColoredLed';


class App extends React.Component<{}, { color: string }> {

  constructor(props: {}) {
    super(props);

    this.state = { color: 'red' };
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  handleChangeComplete = (color: ColorResult) => {
    this.setState({ color: color.hex });
  };

  render() {
    return <div className="App">
      <header className="App-header">
        <h1>
          Some <code>colored-led</code>
        </h1>
      </header>
      <section>
        <h2 className="title-indicators">Static</h2>
        <article className="some-indicators">
          {['red', 'green', 'blue', '#123456'].map(color =>
            <div key={color} className='led'><span>{color}</span><ColoredLed color={color} /></div>
          )}
        </article>
        <h2 className="title-indicators">Dynamic</h2>
        <article className="some-indicators">
          <SketchPicker
            color={this.state.color}
            onChangeComplete={this.handleChangeComplete}
          />
          <div className='led'><ColoredLed color={this.state.color} /></div>
        </article>
      </section>
    </div>;
  }
}

export default App;
