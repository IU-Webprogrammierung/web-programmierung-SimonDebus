document.addEventListener("DOMContentLoaded", function() {
    const isEnglish = window.location.pathname.includes("-en.html");
  
    const headerFile = isEnglish ? "components/header-en.html" : "components/header.html";
    const footerFile = isEnglish ? "components/footer-en.html" : "components/footer.html";
  
    fetch(headerFile)
      .then(response => response.text())
      .then(data => document.querySelector("header").innerHTML = data);
  
    fetch(footerFile)
      .then(response => response.text())
      .then(data => document.querySelector("footer").innerHTML = data);
  });
  