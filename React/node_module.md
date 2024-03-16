## node_modules

### yarn add open-color include-media

```scss
@import "~include-media/dist/include-media";
@import "~open-color/open-color";

$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;

@mixin square($size) {
  $calculated: 32px * $size;
  width: $calculated;
  height: $calculated;
}
```

```scss
.SassComponent {
  display: flex;
  background: $oc-gray-2;
  @include media("<768px") {
    background: $oc-gray-9;
  }
  .box {
    background: red;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &.red {
      background: $red;
      @include square(1);
    }
    &.orange {
      background: $orange;
      @include square(2);
    }
    &.yellow {
      background: $yellow;
      @include square(3);
    }
    &.green {
      background: $green;
      @include square(4);
    }
    &.blue {
      background: $blue;
      @include square(5);
    }
    &.indigo {
      background: $indigo;
      @include square(6);
    }
    &.violet {
      background: $violet;
      @include square(7);
    }
    &:hover {
      background: black;
    }
  }
}
```
