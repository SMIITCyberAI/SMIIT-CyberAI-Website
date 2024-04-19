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

let isFormFilled = false;

function sendPopupMail() {
    // Validate the form fields
    let userName = document.getElementById("user_name_popup").value;
    let userEmail = document.getElementById("user_email_popup").value;

    // If validation passes
    if (userName && userEmail) {
        // Get the file path from the data attribute
        let filePath = document.getElementById("downloadLink").getAttribute("data-file-path");

        // Simulate file download by creating an anchor element and triggering a click event
        let downloadLink = document.createElement("a");
        downloadLink.href = filePath;
        downloadLink.download = filePath.split("/").pop(); // Set the file name as the last segment of the file path
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        // Hide the popup box
        document.getElementById("box-popup-contact").style.display = "none";

        // Update the flag to indicate that the form has been filled
        isFormFilled = true;
    } else {
        // Show error messages or handle invalid input
        if (!userName) {
            document.getElementById("name_error_popup").textContent = "Please enter your name.";
        }
        if (!userEmail) {
            document.getElementById("email_error_popup").textContent = "Please enter a valid email address.";
        }
    }
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
  if (!isFormFilled) {
    var boxPopupContact = document.getElementById("box-popup-contact");
    boxPopupContact.style.display = "block";
    blurContent();
}
}
document
  .getElementById("downloadLink")
  .addEventListener("click", function (event) {
    if (!isFormFilled) {
      event.preventDefault(); // Prevent the default action (download)
      showPopup(); // Show the popup to prompt the user to fill out the form
    }
  });
const formInputs = document.querySelectorAll(
  "#form_id2 input, #form_id2 textarea, #form_id2 select"
);

formInputs.forEach((input) => {
  input.addEventListener("input", function () {
    this.style.color = "white"; // Change text color to white
  });
});
