var form = document.getElementById('form')
var search = document.getElementById('search')

search.focus()

var matches = window.location.search.match(/[?&]q=([^&]+)/)
if (matches) {
  type(decodeURIComponent(matches[1]).split(''))
}

function type(chars) {
  if (chars.length) {
    search.value += chars.shift()
    setTimeout(type.bind(null, chars), rand(100, 600))
  } else {
    form.submit()
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}