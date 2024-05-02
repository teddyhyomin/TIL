## React with Redux

### Counter component

```js
const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1> {number} </h1>
      <div>
        <button onClick={onIncrease}> +1 </button>
        <button onClick={onDecrease}> -1 </button>
      </div>
    </div>
  );
};

export default Counter;
```

### App.js

```js
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Counter number={0} />
    </div>
  );
};

export default App;
```
