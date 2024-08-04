// @ts-check
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");

const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slideCount = mainSlide?.querySelectorAll("div").length;

let activeSlideIndex = 0;

if (sidebar instanceof HTMLElement) {
  if (slideCount) {
    sidebar.style.top = `-${(slideCount - 1) * 100}vh`;
  }
}

console.log("upBtn", upBtn);
if (upBtn) {
  upBtn.addEventListener("click", () => {
    changeSlide("up");
  });
}

if (downBtn) {
  downBtn.addEventListener("click", () => {
    changeSlide("down");
  });
}
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    changeSlide("up");
  } else if (event.key === "ArrowDown") {
    changeSlide("down");
  }
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;

    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      if (typeof slideCount === "number") {
        activeSlideIndex = slideCount - 1;
      }
    }
  }

  if (container) {
    const height = container.clientHeight;
    if (mainSlide) {
      if (mainSlide instanceof HTMLElement) {
        mainSlide.style.transform = `translateY(-${
          activeSlideIndex * height
        }px)`;
      }

      if (sidebar instanceof HTMLElement) {
        sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
      }
    }
  }
}
