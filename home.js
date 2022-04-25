import { debounce, lazyLoading } from "./utils.js";

let header = document.querySelector("header");
window.addEventListener("scroll", debounce(navFixPos));
function navFixPos(e) {
  if (window.scrollY == 0) {
    header.classList.remove("fixed");
    return;
  }

  header.classList.add("fixed");
}

let faqQuestions = document.querySelectorAll("[data-question]");
faqQuestions.forEach((q) => {
  q.addEventListener("click", toggleAnswer);

  function toggleAnswer(e) {
    let icon = q.querySelector("ion-icon");
    let answer = q.querySelector("p.answer");
    icon.name.includes("up")
      ? (icon.name = "chevron-down-outline")
      : (icon.name = "chevron-up-outline");

    answer.classList.toggle("active");
  }
});

//* animating lazy  loading with Interaction Observer;
function scrollingAnimations() {
  let allElements = Array.from(
    document.querySelectorAll(
      ":is(section:not(section.landing), footer) .container > *"
    )
  );

  lazyLoading(allElements);
}
scrollingAnimations();
