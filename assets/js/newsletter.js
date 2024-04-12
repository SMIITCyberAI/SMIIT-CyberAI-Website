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

function sendSignupMail() {
  var emailInput = document.getElementById("newsletter_email");
  var emailError = document.getElementById("newsletter_email_error");
  var email = emailInput.value.trim();

  if (email === "") {
    emailError.textContent = "Please enter your email address.";
    return;
  } else {
    emailError.textContent = "";
  }

  var params = {
    email: document.getElementById("newsletter_email").value,
  };

  emailjs
    .send("service_k8hs97d", "template_8ohnkz6", params)
    .then(function (res) {
      console.log("Message Sent" + res.status);
      emailInput.value = "";
      showSuccessToast();
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
      showUnSuccessToast();
    });
  document.getElementById("newsletter_email").value = "";
  // alert("Button Clicked");
}
