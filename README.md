# sgfgrove-ff123

Add FF[1]-FF[3] properties to sgfgrove

[![Build Status](https://travis-ci.org/anazawa/sgfgrove-ff123.svg)](https://travis-ci.org/anazawa/sgfgrove-ff123)

## Synopsis

In your HTML:

```html
<script src="sgfgrove.js"></script>
<script src="sgfgrove/ff123.js"></script>
```

In your JavaScript:

```js
SGFGrove.parse("(;FF[3];B[pd];W[qp])");
// => [[
//     [{ FF: 3 },
//      { B: "pd" },
//      { W: "qp" }],
//     []
// ]]

SGFGrove.stringify([[
    [{ FF: 3 },
     { B: "pd" },
     { W: "qp" }],
    []
]]);
// => "(;FF[3];B[pd];W[qp])"
```

## Description

Add FF[1]-FF[3] properties to sgfgrove.

## See Also

- [sgfgrove](https://github.com/anazawa/sgfgrove)

## Author

Ryo Anazawa (anazawa@cpan.org)

## License

MIT

