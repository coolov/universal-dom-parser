# universal-dom-parser

### Usage

Make sure that whatever build system you are using (Webpack etc) is honoring the browser field in package.json. Then import the library and use it the same way you would use the browser native [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser).

```js
let DOMParser = require('isomorphic-dom-parser');
let parser = new DOMParser();
let doc = parser.parseFromString(`<html><body>Precious website</body></html>`, 'text/html');
```

### Implementation
* Uses [jsdom](https://github.com/jsdom/jsdom) in NodeJS and the native [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) in the browser
