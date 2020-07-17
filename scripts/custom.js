$(document).ready(() => {
  if ("addEventListener" in document) {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        FastClick.attach(document.body);
      },
      false
    );
  }

  // OR if your using jQuery
  $(function () {
    FastClick.attach(document.body);
  });

  $("#nav-dropdown-btn").click(() => {
    $(".header").toggleClass("nav-open").toggleClass("nav-closed");
    $("#nav-dropdown-btn").toggleClass("flipped");
  });
  
});
