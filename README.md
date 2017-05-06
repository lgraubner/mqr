# mqr

[![npm](https://img.shields.io/npm/v/mqr.svg)](https://www.npmjs.com/package/mqr) [![Travis](https://img.shields.io/travis/lgraubner/mqr.svg)](https://travis-ci.org/lgraubner/mqr) [![David](https://img.shields.io/david/lgraubner/mqr.svg)](https://david-dm.org/lgraubner/mqr)

> Functional matchMedia wrapper for media query handling.

Small functional wrapper for `matchMedia` to work with media queries in JavaScript. Weighs only 359b, has no dependencies and supports IE10+. To support legacy browsers a [polyfill](https://github.com/paulirish/matchMedia.js) is required.

## Table of contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Install

This module is available on [npm](https://www.npmjs.com/).

```
$ npm install mqr
```

If you are using some kind of bundler ([webpack](https://webpack.js.org), [rollup](https://rollupjs.org)...) you can import it like this:

```JavaScript
// ES6
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
query.listen('(min-width: 768px)', matches => {
  console.log(matches); // boolean
});

// listen + remove handler
function handler() {}
query.listen('(min-width: 768px)', handler);
query.remove('(min-width: 768px)', handler);

// simple media query check
const matches = query.matches('(min-width: 992px)');
console.log(matches); // boolean
```

## API

### mqr()

Initializes mqr, returns instance with methods.

```JavaScript
const query = mqr();
```

### mqr.listen(query, handler[, execute])

Register a handler for a given media query. Handler will be executed once every time the breakpoint is reached. If `execute` is `true` (default) the handler will also be called when it's registered.

```JavaScript
query.listen('(min-width: 768px)', matches => {
  console.log(matches); // boolean
}, false);
```

### mqr.remove(query, handler)

Removes a previously registered media query handler.

```JavaScript
function handler() {}
query.listen('(min-width: 768px)', handler);
query.remove('(min-width: 768px)', handler);
```

### mqr.matches(query)

Checks if given media query is matching.

```JavaScript
const matches = query.matches('(min-width: 992px)');
console.log(matches); // boolean
```

## License

[MIT](https://github.com/lgraubner/mqr/blob/master/LICENSE) © [Lars Graubner](https://larsgraubner.com)
