let num = document.querySelectorAll(".num");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");
let del = document.querySelector(".btn-del");
let form = document.querySelector("input");

num.forEach(function (e) {
  e.addEventListener("click", function () {
    form.value += e.dataset.num;
  });
});

equal.addEventListener("click", function () {
  if (form.value == "") {
    null;
  } else {
    let answer = eval(form.value);
    form.value = answer;
  }
});

del.addEventListener("click", function () {
  let value = form.value;
  form.value = value.slice(0, -1);
});

clear.addEventListener("click", function () {
  form.value = "";
});

