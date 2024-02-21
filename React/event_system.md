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

### component method

```js
import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }
  handleClick() {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }
  render() {
    return (
      <div>
        <h1> event test</h1>
        <input
          type="test"
          name="message"
          placeholder="I love you teddy"
          value={this.state.message}
          onChange={this.handleChange}
          /*{
                        (e) => {
                            //console.log(e.target.value) 
                            this.setState({
                                message: e.target.value
                            })
                        } 
                        
                    }*/
        />
        <button
          onClick={this.handleClick}
          /*{
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }*/
        >
          {" "}
          check{" "}
        </button>
      </div>
    );
  }
}

export default EventPractice;
```

### transform-class-properties

```js
import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
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
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}> check </button>
      </div>
    );
  }
}

export default EventPractice;
```

### onKeyPress event and multi input handling

```js
import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      message: "",
      username: "",
    });
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1> event test</h1>
        <input
          type="text"
          name="message"
          placeholder="this is message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="this is username"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}> check </button>
      </div>
    );
  }
}

export default EventPractice;
```

### funchtion component with onChange handler

```js
import { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1> event test </h1>
      <input
        type="text"
        name="username"
        placeholder="name of user"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="context"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}> check </button>
    </div>
  );
};

export default EventPractice;
```

- function component object

```js
import { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1> event test </h1>
      <input
        type="text"
        name="username"
        placeholder="name of user"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="context"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}> check </button>
    </div>
  );
};

export default EventPractice;
```
