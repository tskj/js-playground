function value(className) {
  var els = document.getElementsByClassName(className);
  var el = els[0];
  if (!el) {
    return 0;
  }

  var val = el.innerText;
  return parseInt(val) || 0;
}

function progress() {
  var seconds = value('seconds');
  var minutes = value('minutes');

  var time = seconds + minutes * 60;

  return (time % 20 || 20) / 20;
}

function updateProgressBar() {
  var id = 'progress-bar';
  var node = document.getElementById(id);
  if (!node) {
    node = document.createElement('div');
    node.id = id;  var style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: width 1s linear;
    background-color: rgba(255, 0, 0, 0.2);
    pointer-events: none;
    mix-blend-mode: multiply;
    z-index: 100;`;

    node.style = style;
    document.getElementsByTagName('body')[0].appendChild(node);
  }

  var prog = progress();
  node.style.width = `${prog * 100}vw`;
}

setInterval(updateProgressBar, 16);
