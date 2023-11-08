
setInterval(function () {
  const time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true })
  document.querySelector("#clock").innerHTML = time;
}, 1000);
