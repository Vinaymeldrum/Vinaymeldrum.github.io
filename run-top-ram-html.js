// Importing code from top-ram.html
  function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);

    element.innerHTML = req.responseText;
  }

load("top-ram.html", document.getElementById("includedContent"));
