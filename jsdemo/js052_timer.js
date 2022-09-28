function display() {
  for (let i = 0; i <= 5; i++) {
    console.log(`i=${i}`);
  }
}

console.log("start");

//1000이 1초
//setTimeout(실행함수, 시간)
setTimeout(display, 1000); //비동기로 처리되기 때문에 eventloop에 쌓여있다가 callstack이 비워진 후 실행됨
console.log("end");
