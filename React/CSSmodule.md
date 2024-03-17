## CSS Module

### practice

- css file

```css
.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}

.inverted {
  color: black;
  background: white;
  border: 1px solid black;
}

:global .somethings {
  font-weight: 800;
  color: aqua;
}
```

- js file
- yarn add classnames

```js
import classNames from "classnames/bind";
// import styles from "./CSSModule.module.css";
import styles from "./CSSModule.module.scss";

const cx = classNames.bind(styles);

const CSSModule = () => {
  console.log(styles);
  return (
    //    <div className={`${styles.wrapper} ${styles.inverted}`}>
    //    <div className={[styles.wrapper, styles.inverted].join(" ")}>
    <div className={cx("wrapper", "inverted")}>
      Hello, I am <span className="somethings">CSS Module!!!</span>
    </div>
  );
};
export default CSSModule;
```

```scss
.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
  &.inverted {
    color: orange;
    background: white;
    border: 1px solid black;
  }
}
:global {
  .somethings {
    font-weight: 800;
    color: aqua;
  }
}
```
