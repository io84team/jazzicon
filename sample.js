var jazzicon = require('./')

var body = document.querySelector('body')
for (var i = 0; i < 600; i++) {
  var icon = jazzicon(100, i)
  var img = document.createElement('img')
  img.src = icon
  body.appendChild(img)
}