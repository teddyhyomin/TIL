## useEffect

### useEffect with cleanup function

```js
import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  /*
    useEffect(() => {
        console.log('rendering is done!');
        console.log({
            name, nickname
        });
    });
    
    useEffect(() => {
        console.log('run, when it is mount');
    }, []);
*/
  useEffect(() => {
    console.log(name);
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  /*
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.value !== this.props.value) {
            console.log("componentDidUpdate", prevProps, prevState);
        }
    }
*/
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>NAME: </b> {name}
        </div>
        <div>
          <b>NICKNAME: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

### useEffect with cleanup

```js
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        current counter value is <b> {value} </b>.
      </p>
      <button onClick={() => setValue(value + 1)}> +1 </button>
      <button onClick={() => setValue(value - 1)}> -1 </button>
    </div>
  );
};
export default Counter;
```

```js
import { useState } from "react";
import Info from "./info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "hide" : "show"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};
export default App;
```
