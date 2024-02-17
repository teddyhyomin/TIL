## JSX ==> Dom rendering + express JS

### Dom tree structure essential

- use div : make a group
- or
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

- Props:

- 단방향 데이터 바인딩 : 부모 -> 자식 컴포넌트만 데이터 전달 가능함 (자식 -> 부모 전달 못함)
