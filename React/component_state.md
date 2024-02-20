## state

### class component ==> state

```js
import { Component } from "react";

class Counter extends Component {
  /*     constructor(props) {
        super(props);
        this.state = {
            number: 0,
            fixednumber: 0
        };
    }
*/
  state = {
    number: 0,
    fixednumber: 0,
  };
  render() {
    const { number, fixednumber } = this.state;
    return (
      <div>
        <h1> {number} </h1>
        <h2> not change value : {fixednumber} </h2>
        {/*    <button onClick={() => {
                    this.setState({ number: number + 1 });
                    this.setState({ number: this.state.number + 1 });
                }}
                >
                    +1
                </button>
            
                <button onClick={()=> {
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    });
                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}
                >
                    + 1
                </button>
            */}
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("call the state now");
                console.log(this.state);
              }
            );
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}

export default Counter;
```

### function component ==> useState

```js
import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("Hello!");
  const onClickLeave = () => setMessage("Bye!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}> enter </button>
      <button onClick={onClickLeave}> out </button>
      <h1 style={{ color }}> {message} </h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        {" "}
        Red color{" "}
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        {" "}
        Green color{" "}
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        {" "}
        Blue color{" "}
      </button>
    </div>
  );
};

export default Say;
```
