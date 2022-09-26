//옛날 방식
// window.onload = function(){
// let hNode = document.getElementById("selector");
// console.log(hNode);
// }

let hNode = document.getElementById("selector");
console.log(hNode, typeof hNode);

let hId = document.querySelector("#selector");
console.log(hId, typeof hId);

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);

//HTMLCollection(4)
let pNode = document.getElementsByTagName("p");
console.log(pNode, typeof pNode);
console.log(pNode.length); //4
console.log(pNode[0], pNode.item(0)); //배열처럼 접근하거나 item이라는 메소드도 사용가능
console.log(pNode[0].innerText);
pNode[0].style.backgroundColor = "blue";

function process() {
  alert("dd");
  let fname = document.frm.fname;
  console.log("fname:", fname);
  console.log(fname.value);
  console.log(fname.defaultValue);

  //[object HTML InputElement]
  //document.write(fname);
  return false;
}
