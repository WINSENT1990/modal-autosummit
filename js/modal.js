var buttonClose = document.getElementById('button--close')
var modal = document.getElementById('modal')

buttonClose.onclick = close;

function close() {
  document.getElementById('modal').parentNode.removeChild(document.getElementById('modal'));
}
