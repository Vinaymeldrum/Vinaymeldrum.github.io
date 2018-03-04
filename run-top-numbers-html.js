// Importing code from top-numbers.html
  function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);

    element.innerHTML = req.responseText;
  }

load("top-numbers.html", document.getElementById("includedContent"));
