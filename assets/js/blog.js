document.addEventListener("DOMContentLoaded", function () {
  var ball = document.querySelector(".ball");
  var checkbox = document.getElementById("check");
  var sidebar = document.querySelector(".sidebar");
  var respondComment = document.querySelector(".respond-comment");
  var nameLabel = document.querySelector("label[for='name']");
  var emailLabel = document.querySelector("label[for='email']");
  var phoneLabel = document.querySelector("label[for='website']");
  var commentLabel = document.querySelector("label[for='comment']");
  var inputElements = document.querySelectorAll(
    "#form_id input, #form_id textarea"
  );
  var blogPosts = document.querySelector(".blog-posts");
  var postItemDescriptions = document.querySelectorAll(
    ".post-item-description h2"
  );
  var postItemWrap = document.querySelectorAll(".post-item-wrap p");
  var box = document.querySelector(".box");

  function updateStyles() {
    if (checkbox.checked) {
      blogPosts.style.background = "#1b2137";
      postItemDescriptions.forEach(function (element) {
        element.style.color = "white";
      });
      postItemWrap.forEach(function (element) {
        element.style.color = "#afb6d2";
      });

      sidebar.style.background = "none";
      [respondComment, nameLabel, emailLabel, phoneLabel, commentLabel].forEach(
        function (label) {
          if (label) label.style.color = "white";
        }
      );

      inputElements.forEach(function (element) {
        element.style.backgroundColor = "";
      });
      ball.style.left = "0px";
      box.style.backgroundColor = "#18203e";
      ball.style.borderColor = "black";
    } else {
      blogPosts.style.background = "white";
      postItemDescriptions.forEach(function (element) {
        element.style.color = "#2a3150";
      });
      postItemWrap.forEach(function (element) {
        element.style.color = "#2a3150";
      });

      sidebar.style.background = "#4aa5f0";
      ball.style.left = "60px";
      box.style.backgroundColor = "white";
      ball.style.borderColor = "white";
      inputElements.forEach(function (element) {
        element.style.backgroundColor = "#4aa5f0";
      });
      [respondComment, nameLabel, emailLabel, phoneLabel, commentLabel].forEach(
        function (label) {
          if (label) label.style.color = "#2a3150";
        }
      );
    }
  }

  checkbox.checked = true;

  updateStyles();

  checkbox.addEventListener("change", updateStyles);
});
