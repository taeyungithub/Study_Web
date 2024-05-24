function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0"); //임의의 숫자생성
  //String, padStart를 활용하여 사라진 0을 삽입
  console.log(result);
}

//실제 실행
getToken();
