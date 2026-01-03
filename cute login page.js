const cord = document.getElementById("cord");
const scene = document.querySelector(".scene");
const instruction = document.getElementById("instruction");

let isOn = false;

cord.addEventListener("click", () => {
  isOn = !isOn;
  scene.classList.toggle("on", isOn);
  instruction.textContent = isOn ? "Turn off the light" : "Pull the thread";
});
