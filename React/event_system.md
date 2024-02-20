## event system

### onChange event handling

```js
import { Component } from "react";

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1> event test</h1>
        <input
          type="test"
          name="message"
          placeholder="I love you teddy"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}
```
