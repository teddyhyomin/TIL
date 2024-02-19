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
