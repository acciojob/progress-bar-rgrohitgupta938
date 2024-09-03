//your JS code here. If required.
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currActive = 1;

next.addEventListener("click", () => {
  currActive++;
  if (currActive > circles.length) {
    currActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currActive--;
  if (currActive < 1) {
    currActive = 1;
  }
  update();
});

const update = () => {
  circles.forEach((cr, inx) => {
    if (inx < currActive) {
      cr.classList.add("active");
    } else {
      cr.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currActive === 1) {
    prev.disabled = true;
  } else if (currActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
