function showSuccessToast() {
  var toastContainer = document.getElementById("toastContainer");
  var toast = document.createElement("div");
  toast.className = "toast showing";
  toast.innerText = "Success! We will contact you soon.";
  toastContainer.appendChild(toast);

  setTimeout(function () {
    toast.remove();
  }, 3000);
}

function showUnSuccessToast() {
  var toastContainer = document.getElementById("toastContainer");
  var toast = document.createElement("div");
  toast.className = "Redtoast showing";
  toast.innerText = "Failed!! Please Try Again";
  toastContainer.appendChild(toast);

  setTimeout(function () {
    toast.remove();
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".close-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      var boxContainer = this.closest(".box-container");
      boxContainer.remove();
      removeBlur();
    });

  var mainContent = document.getElementById("main-content");
  var popupContainer = document.getElementById("box-popup");

  function blurContent() {
    mainContent.classList.add("blur");
    // document.body.style.overflow = "hidden";
  }

  function removeBlur() {
    mainContent.classList.remove("blur");
    document.body.style.overflow = "";
  }

  var popupClosed = localStorage.getItem("popupClosed");
  if (!popupClosed) {
    setTimeout(function () {
      popupContainer.style.display = "block";
      blurContent();
    }, 2000);
  }
});

function showPopup() {
  var boxPopupContact = document.getElementById("box-popup-contact");
  boxPopupContact.style.display = "block";
  blurContent();
}
