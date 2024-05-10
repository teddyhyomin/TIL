## Redux env

### modules/counter.js

```js
import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
```

### modules/index.js

```js
import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
```

### index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>
  */

  <Provider store={store}>
    <App />
  </Provider>
);
```

### components/Counter.js

```js
const Counter = ({ onIncrease, onDecrease, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}> +1 </button>
      <button onClick={onDecrease}> -1 </button>
    </div>
  );
};

export default Counter;
```

### containers/CountterContainer.js

```js
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
```

### App.js

```js
import CounterContainer from "./containers/CounterContainer";

const App = () => {
  return (
    <div>
      <CounterContainer />
    </div>
  );
};

export default App;
```
