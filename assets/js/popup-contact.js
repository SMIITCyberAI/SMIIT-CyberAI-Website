document.addEventListener("DOMContentLoaded", function () {
  let popupClosed = false;


  function showPopup() {
    var boxPopupContact = document.getElementById("box-popup-contact");
    boxPopupContact.style.display = "block";
    document.body.style.overflow = "hidden";
  }

 
  function sendPopupMail() {
    var name = document.getElementById("user_name_popup").value;
    var email_id = document.getElementById("user_email_popup").value;
    var phn_no = document.getElementById("user_phn_popup").value;
    var message = document.getElementById("user_message_popup").value;
    var cmp_name = document.getElementById("company_name").value;
    var cmp_website = document.getElementById("company_website").value;

    var nameError = document.getElementById("name_error_popup");
    var emailError = document.getElementById("email_error_popup");
    var phoneError = document.getElementById("phone_error_popup");
    var messageError = document.getElementById("message_error_popup");
    var companyError = document.getElementById("company_website_error");
    var companynameError = document.getElementById("company_name_error");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    companyError.textContent = "";
    companynameError.textContent = "";

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

    document.getElementById("form_id2").reset();
    var params = {
      name: name,
      email_id: email_id,
      phn_no: phn_no,
      message: message,
      cmp_name: cmp_name,
      cmp_website: cmp_website,
    };

    emailjs
      .send("service_3absgpp", "template_5jc7sd1", params)
      .then(function (res) {
        console.log("Message Sent" + res.status);

        popupClosed = true; 
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

  document
    .getElementById("openPopupBtn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      if (!popupClosed) {
       
        showPopup();
      }
    });

  document
    .querySelector(".close-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      var boxContainer = document.getElementById("box-popup-contact");
      boxContainer.style.display = "none";
      document.body.style.overflow = ""; 
    });
});
