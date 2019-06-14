# Jazzicon

## Jazzy Identicons

Say goodbye to boring blocky identicons that look like they came out of the 70s, and replace them with jazzy, colorful collages that more likely came out of the 80's.

![example](./example.png)

## Installation

```
npm install io84-jazzicon
```

## Usage

Takes a pixel diameter and a javascript integer (seeds the shape), and gives you back a DOM element to use as you wish!

```javascript
var jazzicon = require('./')
//or
//<script src="dist/io84-jazzicon.min.js"></script>

var body = document.querySelector('body')
for (var i = 0; i < 600; i++) {
    var icon = jazzicon(100, i)
    var img = document.createElement('img')
    img.src = icon
    body.appendChild(img)
}
```

## Example

You can run an example by installing beefy (`npm i -g beefy`) and then running `npm run start`.
