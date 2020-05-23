import express from "express";

const app = express();
const PORT = 7777;

app.listen(PORT, () => {
  console.log(`server start PORT : ${PORT}`);

  // 배열 arr을 초기화한다.
  const arr = new Array();

  // 초기화된 배열 arr을 출력한다
  console.log(arr);

  //arr에 데이터를 추가한다.
  arr.push("방효진"); //0

  //데이터가 추가된 arr을 출력한다.
  console.log(arr);

  //arr에 데이터를 추가한다.
  arr.push("정예림"); //1
  arr.push("오은하"); //2
  arr.push("박여원"); //3
  arr.push("홍민기"); //4
  arr.push("오민형"); //5
  arr.push("신태섭"); //6
  arr.push("정예림"); //7
  arr.push("오은하"); //8
  arr.push("박여원"); //9
  arr.push("홍민기"); //10
  arr.push("오민형"); //11
  arr.push("신태섭"); //12

  //데이터가 추가된 arr을 출력한다.
  console.log(arr);

  //4번 인덱스를 출력한다.
  console.log(arr[4]);

  // 배열의 갯수를 출력한다.
  console.log(arr.length);

  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}님, 당장 교육청으로 오세요`);
  }
});
