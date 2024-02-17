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
  return <div>{name === "Hello" && <h1> it is Hello. </h1>}</div>;
}
export default App;
```
