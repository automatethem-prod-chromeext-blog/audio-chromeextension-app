console.log("I am popup.js");

const button = document.querySelector('#button');
//const button = document.getElementById("button");
button.addEventListener("click", async () => {
  const audio = new Audio(chrome.runtime.getURL("bell.wav"));
  audio.play();
});

