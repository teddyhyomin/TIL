## How to use Consumer

### It is not using props. consumer component

- create Context

```js
import { createContext } from "react";

const ColorContext = createContext({ color: "black" });

export default ColorContext;
```

- Consumer context

```js
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
```

- rendering by app.js

```js
import ColorBox from "./components/ColorBox";
const App = () => {
  return (
    <div>
      <ColorBox />
    </div>
  );
};

export default App;
```
