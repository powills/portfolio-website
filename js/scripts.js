console.log("Hello and Welcome to my Portfolio Site!")
function myFunction() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle'){
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
