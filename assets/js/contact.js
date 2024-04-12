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

function sendMail() {
  var name = document.getElementById("user_name").value;
  var email = document.getElementById("user_email").value;
  var phone = document.getElementById("user_phn").value;
  var message = document.getElementById("user_message").value;
  // console.log(name, email, phone, message);
  var nameError = document.getElementById("name_error");
  var emailError = document.getElementById("email_error");
  var phoneError = document.getElementById("phone_error");
  var messageError = document.getElementById("message_error");

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";

  if (name.trim() === "") {
    nameError.textContent = "Please enter your name";
    return;
  }
  if (email.trim() === "") {
    emailError.textContent = "Please enter your email address";
    return;
  }
  if (phone.trim() === "") {
    phoneError.textContent = "Please enter your phone number";
    return;
  }
  if (message.trim() === "") {
    messageError.textContent = "Please enter your message";
    return;
  }
  document.getElementById("form_id").reset();
  var params = {
    name: name,
    email_id: email,
    phone_no: phone,
    Message: message,
  };

  emailjs
    .send("service_k8hs97d", "template_cmjw1j8", params)
    .then(function (res) {
      console.log("Message Sent" + res.status);
      showSuccessToast();
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
      showUnSuccessToast();
    });
  // alert("Button Clicked");
}

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/65d383ca9131ed19d96eab59/1hn13lku6";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
