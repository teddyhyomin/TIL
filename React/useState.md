## Hook

### single useState

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

### multiple useState

```js
import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

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
