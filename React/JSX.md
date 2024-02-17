## JSX ==> Dom rendering + express JS

### Dom tree structure essential

- use div : make a group

#### or

- use Fragment ==> Since React V16

```js
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <h2>World</h2>
    </div>
  );
}
export default App;
```

```js
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <h2>World</h2>
    </Fragment>
  );
}
export default App;
```

```js
import {} from "react";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <h2>World</h2>
    </>
  );
}
export default App;
```

### Ternary Operator

```js
function App() {
  const name = "password";
  return (
    <div>
      {name === "password" ? (
        <h1> it is password. </h1>
      ) : (
        <h2> it is NOT password. </h2>
      )}
    </div>
  );
}
export default App;
```

### Conditional Expressions

```js
function App() {
  const name = "Hello";
  return (
    <div>
    {name === "Hello" && <h1> it is Hello. </h1>}
    </div>;
    )
}
export default App;
```

### Protect undefined value error

```js
function App() {
  const name = undefined;
  return <div> {name || "the value is undefined."} </div>;
}

export default App;
```

### Inline Styleing AKA CamelCase

```js
function App() {
  const name = "Hello";
  const stylehere = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    pedding: 16,
  };
  return <div style={stylehere}> {name} </div>;
}
```

### JSX need to use className instead of class

```css
// src/App.css

.helloworld {
  background: aqua;
  color: black;
  font-size: 48px;
  font-weight: bold;
  padding: 16px;
}
```

```js
import "./App.css";

function App() {
  const yourcontent = "Hello World !!!";
  return <div className="helloworld"> {yourcontent} </div>;
}
```
