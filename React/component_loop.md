## looping component

### map function, array, and key

```js
/*
const IterationSample = () => {
    return(
        <ul>
            <li>Snow man</li>
            <li>ice</li>
            <li>snow</li>
            <li>wind</li>
        </ul>
    );
};

const IterationSample = () => {
  const names = ["snow man", "ice", "snow", "wind"];
  const nameList = names.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};
*/

const IterationSample = () => {
  const names = ["snow man", "ice", "snow", "wind"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
```

### data add and remove

```js
import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 10, text: "snow man" },
    { id: 20, text: "ice" },
    { id: 30, text: "snow" },
    { id: 40, text: "wind" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(50);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 10);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  //const nameList = names.map(name => (<li key={name.id}>{name.text} </li>);
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}> add </button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
```
