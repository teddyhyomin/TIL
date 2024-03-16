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

:global .somethings {
  font-weight: 800;
  color: aqua;
}
```

- js file

```js
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  console.log(styles);
  return (
    <div className={styles.wrapper}>
      Hello, I am <span className="somethings">CSS Module!!!</span>
    </div>
  );
};
export default CSSModule;
```
