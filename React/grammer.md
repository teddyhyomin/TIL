### Arrow Function

- function pass to parameter

```js
setTimeout(() => {
  console.log("Hello World");
}, 1000);
```

```js
setTimeout(function () {
  console.log("Hello World");
}, 1000);
```

```js
function BlackDog() {
  this.name = "WhiteDogi";
  return {
    name: "BlackDogi",
    bark: function () {
      console.log(this.name + ": bowwow!");
    },
  };
}
const blackDog = new BlackDog();
blackDog.bark(); //BlackDogi: bowwow!
```

```js
function WhiteDog() {
  this.name = "WhiteDogi";
  return {
    name: "BlackDogi",
    bark: () => {
      console.log(this.name + ": bowwow!");
    },
  };
}
const whiteDog = new WhiteDog();
whiteDog.bark(); //WhiteDogi: bowwow!
```

<br>

### prototype

```js

furnction Dog(nicname) {
  this.name = nickname;
}

Dog.prototype.say = function() {
  console.log(this.name + ': bowwow');
}

var dog = new Dog('BlackDogi');
dog.say(); //BlackDogi: bowwow

```

### class usage instead of prototype

```js
class Dog {
  constructor(nicname) {
    this.name = nicname;
  }
  say() {
    console.log(this.name + ": bowwow");
  }
}

const dog = new Dog("WhiteDogi");
dog.say(); //WhiteDogi: bowwow
```

<br>

### let

```js
function myFunction() {
  let a = 1;
  if (true) {
    let a = 2;
    console.log(a); // 2
  }
  console.log(a); // 1
}
```

### const

```js
function myFunction() {
  const a = 1;
  if (true) {
    const a = 2;
    console.log(a); //
  }
  console.log(a); //
}
```
