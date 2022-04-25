function debounce(func, wait = 100, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

function lazyLoading(elements) {
  let observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeUp");
          observer.unobserve(entry.target);
        }
      }),
    { rootMargin: "60%" }
  );

  elements.forEach((e) => observer.observe(e));
}

export { debounce, lazyLoading };
