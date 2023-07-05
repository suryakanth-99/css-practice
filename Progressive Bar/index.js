let progress = document.getElementById("progress");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let circles = document.querySelectorAll(".circle");
let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
  console.log(currentActive);
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
  console.log(currentActive);
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  let percentage = ((currentActive - 1) / (circles.length - 1)) * 100;
  progress.style.width = percentage + "%";
  if (currentActive === circles.length) {
    next.disabled = true;
  } else if (currentActive <= 1) {
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
