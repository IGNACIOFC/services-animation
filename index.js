const hiddenText = document.querySelector("#hidden");
const mainText = document.querySelector("#main");

function checkVisibility() {
  const hiddenRect = hiddenText.getBoundingClientRect();

  if (window.scrollY > hiddenRect.height) {
    mainText.style.position = "absolute";
    mainText.style.bottom = -hiddenRect.height + "px";
    console.log("Es visible");
  } else {
    mainText.style.position = "fixed";
    mainText.style.bottom = 0;
    console.log("No es visible");
  }
}

window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);
