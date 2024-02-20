## event system

### onChange event handling

```js
import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  render() {
    return (
      <div>
        <h1> event test</h1>
        <input
          type="test"
          name="message"
          placeholder="I love you teddy"
          value={this.state.message}
          onChange={(e) => {
            //console.log(e.target.value)
            this.setState({
              message: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        >
          check
        </button>
      </div>
    );
  }
}

export default EventPractice;
```
