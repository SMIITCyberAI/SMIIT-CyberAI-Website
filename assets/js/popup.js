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

function sendPopupMail() {
  var name = document.getElementById("user_name_popup").value;
  var email_id = document.getElementById("user_email_popup").value;
  var phn_no = document.getElementById("user_phn_popup").value;
  var message = document.getElementById("user_message_popup").value;
  var cmp_name = document.getElementById("company_name").value;
  var cmp_website = document.getElementById("company_website").value;
  var services = document.getElementById("dropdown_options").value;

  var nameError = document.getElementById("name_error_popup");
  var emailError = document.getElementById("email_error_popup");
  var phoneError = document.getElementById("phone_error_popup");
  var messageError = document.getElementById("message_error_popup");
  var companyError = document.getElementById("company_website_error");
  var companynameError = document.getElementById("company_name_error");
  var servicesError = document.getElementById("dropdown_options");

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";
  companyError.textContent = "";
  companynameError.textContent = "";
  servicesError.textContent = "";

  if (name.trim() === "") {
    nameError.textContent = "Please enter your name";
    return;
  }
  if (email_id.trim() === "") {
    emailError.textContent = "Please enter your email address";
    return;
  }
  if (phn_no.trim() === "") {
    phoneError.textContent = "Please enter your phone number";
    return;
  }
  if (message.trim() === "") {
    messageError.textContent = "Please enter your message";
    return;
  }
  if (cmp_name.trim() === "") {
    messageError.textContent = "Please enter your Company Name";
    return;
  }
  if (cmp_website.trim() === "") {
    messageError.textContent = "Please enter your Company website";
    return;
  }
  if (services.trim() === "") {
    messageError.textContent = "Please enter interested services";
    return;
  }

  document.getElementById("form_id2").reset();
  var params = {
    name: name,
    email_id: email_id,
    phn_no: phn_no,
    message: message,
    cmp_name: cmp_name,
    cmp_website: cmp_website,
    services: services,
  };

  emailjs
    .send("service_3absgpp", "template_5jc7sd1", params)
    .then(function (res) {
      console.log("Message Sent" + res.status);

      localStorage.setItem("popupClosed", "true");

      var closeBtn = document.querySelector(".close-btn");
      if (closeBtn) {
        closeBtn.click();
      }
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
      alert("Message Not sent");
    });
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
