let total = document.getElementById("total");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
//querySelectAll을 사용하여 opt1,2,3를 한번에 가지고 올수 있음

document.getElementById("opt1").onclick = function () {
  if (opt1.checked) {
    total.value = Number(total.value) + Number(opt1.value);
  } else {
    total.value = Number(total.value) - Number(opt1.value);
  }
};
document.getElementById("opt2").onclick = function () {
  if (opt2.checked) {
    total.value = Number(total.value) + Number(opt2.value);
  } else {
    total.value = Number(total.value) - Number(opt2.value);
  }
};

document.getElementById("opt3").onclick = function () {
  if (opt3.checked) {
    total.value = Number(total.value) + Number(opt3.value);
  } else {
    total.value = Number(total.value) - Number(opt3.value);
  }
};
