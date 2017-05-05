# mqr

> Functional matchMedia wrapper for media query handling.

Small functional wrapper for `matchMedia` to work with media queries in JavaScript. Weighs only 334b, has no dependencies and supports IE10+. To support legacy browsers a [polyfill](https://github.com/paulirish/matchMedia.js) is required.

## Install

This module is available on [npm](https://www.npmjs.com/).

```
$ npm install --save mqr
```

If you are using some kind of bundler (webpack, rollup...) you can use it like this:

```JavaScript
// es6
import mqr from 'mqr';

// CommonJS
var mqr = require('mqr');
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com/#/):

```HTML
<script src="https://unpkg.com/mqr/dist/mqr.js"></script>
```

## Usage

```JavaScript
import mqr from 'mqr';

const query = mqr();

// listen to viewport changes
query.listen('(min-width: 768px)', (matches) => console.log(matches));

// listen + remove handler
function handler() {}
query.listen('(min-width: 768px)', handler);
query.remove('(min-width: 768px)', handler);

// simple media query check
console.log(query.matches('(min-width: 992px)'));
```

## API

### listen

Register a handler for a given media query. Handler will be executed once every time the breakpoint is reached. The handler will also be called at initial load.

**Parameters**

- `query` Media query string
- `handler` Callback function to execute

### remove

Removes a previously registered media query handler.

**Parameters**

- `query` Registered media query string
- `handler` Callback function to remove

### matches

Checks if given media query is matching.

**Parameters**

- `query` Media query string

**Returns**

`Boolean`

## License

[MIT](https://github.com/lgraubner/mqr/blob/master/LICENSE) © [Lars Graubner](https://larsgraubner.com)
