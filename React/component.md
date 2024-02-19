## component

### function component

- Pros
  less memory use

```js
import "./App.css";

function App() {
  const name = "Hello";
  return <div className="helloworld"> {name} </div>;
}

export default App;
```

### class component ==> state function, lifecycle, and method

- render function is essential for JSX.

```js
import { Component } from "react";

class App extends Component {
  render() {
    const name = "react";
    return <div className="react"> {name} </div>;
  }
}

export default App;
```

### create component

- Mycomponent.js

```js
const MyComponent = () => {
  return <div> My new component </div>;
};

export default Mycomponent;
```

- App.js

```js
import Mycomponent from "./MyComponent";

const App = () => {
  return <MyComponent />;
};

export default App;
```

### props === properties

- Mycomponent.js

```js
const MyComponent = (props) => {
  return <div> Hello My name is {props.name}. </div>;

  MyComponent.defaultProps = {
    name: "Mr invisible",
  };
};

export default Mycomponent;
```

- App.js

```js
import Mycomponent from "./MyComponent";

const App = () => {
  return <MyComponent name="Teddy" />;
};

export default App;
```

### props children

```js
const MyComponent = (props) => {
  return ( <div> Hello My name is {props.name}. <br/>
  children value is {props.children}.
  </div>;
  );

    MyComponent.defaultProps ={
        name: 'Mr invisible'
    }
};

export default Mycomponent;
```

### destructuring assignment

```js
const MyComponent = ({ name, children }) => {
  return (
    <div>
      Hello My name is {name}. <br />
      children value is {children}.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default name",
};

export default Mycomponent;
```

### PropTypes

```js
import PropTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      Hello My name is {name}. <br />
      children value is {children}.<br />
      My favorite number is {favoriteNumber}.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default name",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default Mycomponent;
```

### class component with props

```js
import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hello, My name is {name}. <br />
        children value is {children}. <br />
        My favorite number is {favoriteNumber}.
      </div>
    );
  }
}

MyComponent.defalutProps = {
  name: "defalut name",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
```
