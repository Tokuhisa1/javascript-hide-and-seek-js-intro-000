function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target');
}

function deepestChild() {
  return document.querySelector('div#grand-node')
}
