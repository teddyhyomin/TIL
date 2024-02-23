## DOM with component

### class component

```js
import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "000",
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}> Validation!! </button>
      </div>
    );
  }
}

export default ValidationSample;
```

- ValidationSample.css

```css
.success {
  background-color: lightgreen;
}

.failure {
  background-color: lightcoral;
}
```

### with ref

```js
import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "000",
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}> Validation!! </button>
      </div>
    );
  }
}

export default ValidationSample;
```

### Dom with ref

```js
import { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHight, clientHeight } = this.box;
    this.box.scrollTop = scrollHight - clientHeight;
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
```

```js
import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          Go to Top!
        </button>
      </div>
    );
  }
}

export default App;
```
