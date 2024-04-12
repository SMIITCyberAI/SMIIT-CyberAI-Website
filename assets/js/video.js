document.querySelector(".popup-video").addEventListener("click", function() {
  var popup = document.getElementById("videoPopup");
  var iframe = document.getElementById("videoIframe");
  iframe.src = "https://www.youtube.com/embed/fDEZC90OFl4?autoplay=1&controls=1&rel=0&showinfo=0";
  popup.classList.add("active");
});

function closeVideo() {
  var popup = document.getElementById("videoPopup");
  var iframe = document.getElementById("videoIframe");
  iframe.src = "";
  popup.classList.remove("active");
}

function addBlurEffect() {
  document.querySelector(".video-bg").style.filter = "blur(5px)";
}

function removeBlurEffect() {
  document.querySelector(".video-bg").style.filter = "blur(0)";
}

document
  .querySelector(".video-play-icon")
  .addEventListener("mouseenter", addBlurEffect);
document
  .querySelector(".video-play-icon")
  .addEventListener("mouseleave", removeBlurEffect);

document
  .querySelector(".video-popup")
  .addEventListener("mouseenter", addBlurEffect);
document
  .querySelector(".video-popup")
  .addEventListener("mouseleave", removeBlurEffect);

document.querySelector(".popup-video").addEventListener("click", openVideo);
