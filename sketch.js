const dragger = document.querySelector("a");
const code = document.querySelector("textarea");
const name = document.querySelector("input");
code.addEventListener("keyup", () => {
  dragger.href = `javascript:(function(){${code.value}})();`;
  dragger.innerHTML = name.value;
});

name.addEventListener("keyup", () => {
    dragger.innerHTML = name.value;
});
