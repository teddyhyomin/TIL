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

- How to use Provider

```js
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";
const App = () => {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
```

- How to use Active Context

```js
import { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
```

- update App.js

```js
import ColorBox from "./components/ColorBox";
//import ColorContext from './contexts/color';
import { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    //    <ColorContext.Provider value={{ color: 'red'}}>
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
    //    </ColorContext.Provider>
  );
};

export default App;
```

- update ColorBox.js

```js
//import ColorContext from '../contexts/color';
import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    //        <ColorContext.Consumer>
    <ColorConsumer>
      {/*        {value => (       */}
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              //                   background: value.state.color
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              //                   background: value.state.subcolor
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
    //        </ColorContext.Consumer>
  );
};

export default ColorBox;
```

- add select color component

```js
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2> Please choose color. </h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
```

- How to use "useContext" Hook

```js
//import ColorContext from '../contexts/color';
import { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    //        <ColorContext.Consumer>
    /*        <ColorConsumer>
        {value => (       
            {({ state }) => (
                                                */
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          //                   background: value.state.color
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          //                   background: value.state.subcolor
          background: state.subcolor,
        }}
      />
    </>
    //      )}
    //       </ColorConsumer>
    //        </ColorContext.Consumer>
  );
};

export default ColorBox;
```

- How to use "static contextType"

```js

```
