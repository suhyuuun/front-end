let myNode = document.getElementById("p2");

//parentNode
let ptNode = myNode.parentNode;
//<div i="wrap"></div>
console.log(ptNode);

//parentNode:[object HTMLDivElement]
console.log(`parentNode:${ptNode}`);
ptNode.style.color = "blue";

//////////////////////////////////////////
//previousSibling
let prevNode = myNode.previousSibling;

//prevNode: [object Text]
console.log(`prevNode:${prevNode}`);

prevNode = prevNode.previousSibling;
//prevNode: [object HTMLParagraphElement]
console.log(`prevNode:${prevNode}`);

//////////////////////////////////////////
//nextSibling
let nextNode = myNode.nextSibling;
//[object Text]
console.log(`nextNode:${nextNode}`);

nextNode = nextNode.nextSibling;
//[object HTMLParagraphElement],content3
console.log(`nextNode:${nextNode},${nextNode.innerText}`);

//////////////////////////////////////////
//previousElementSibling
let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNode:${prevEleNode}, ${prevEleNode.innerText}`);

//////////////////////////////////////////
//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode: ${nextEleNode}, ${nextEleNode.innerText}`);

//////////////////////////////////////////
//childNodes
let divNode = document.getElementById("wrap");
//[object HTMLDivElement]
console.log(`divNode:${divNode}`);

let divChildesNode = divNode.childNodes;
//[object NodeList]
console.log(`divChildesNode:${divChildesNode}`);
//[text, p#p1, text, p#p2, text, p#p3, text] ->7개(요소 + 공백까지)
console.log(divChildesNode);

//////////////////////////////////////////
//children
let divChildren = divNode.children;
//[object HTMLCollection]
console.log(`divChildren:${divChildren}`);
//[p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3] ->3개(요소만)
console.log(divChildren);
//<p id="p1">content1</p>
console.log(divChildren[0]);
//<p id="p1">content1</p>
console.log(divChildren.item(0));
//<p id="p1">content1</p>
console.log(divChildren.namedItem("p1"));

//////////////////////////////////////////
//firstChild, firstElementChild
let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
//#text
console.log(aNode);

aNode = pNode.firstElementChild;
//<img src="images/gosu.jpg" alt="영화배우 고수">
console.log(aNode);

let aAttrNode = aNode.getAttribute("src");
//images/gosu.jpg -> 메소드로 지정할 경우 이름만 가지고 옴
console.log(aAttrNode);

aAttrNode = aNode.src;
//http://127.0.0.1:5500/images/gosu.jpg -> 전체를 가지고 옴
console.log(aAttrNode);
