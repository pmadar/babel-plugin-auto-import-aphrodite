# babel-plugin-auto-import-aphrodite

Auto-import `StyleSheet` and `css` from [Aphrodite](https://github.com/Khan/aphrodite).

## Installation

```sh
$ npm install babel-plugin-auto-import-aphrodite
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["auto-import-aphrodite"]
}
```

### Via CLI

```sh
$ babel --plugins auto-import-aphrodite script.js
```

### Via Node API

```javascript
require('babel').transform('code', {
  plugins: ['auto-import-aphrodite']
});
```
