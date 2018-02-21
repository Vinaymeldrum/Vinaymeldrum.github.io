// Importing code from top.html
  function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);

    element.innerHTML = req.responseText;
  }

load("top.html", document.getElementById("includedContent"));
