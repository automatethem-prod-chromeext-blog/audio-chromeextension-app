console.log("I am popup.js");

const button = document.querySelector('#button');
button.addEventListener("click", () => {
  const audio = new Audio(chrome.runtime.getURL("bell.wav"));
  audio.play();
});

