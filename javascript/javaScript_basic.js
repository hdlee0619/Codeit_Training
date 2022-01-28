/* 15를 출력하는코드입니다. */
console.log('Hello Codeit!');
console.log(10 + 5)

// 변수 선언
let espresso = 10;
let milk = 170;
let chocolateSyrup = 50;
let whippedCream = 60;

// 메뉴별 칼로리 테스트
console.log(espresso); // 에스프레소 칼로리
console.log(espresso + milk); // 라떼 칼로리
console.log(espresso + chocolateSyrup + milk); // 모카 칼로리
console.log(espresso + chocolateSyrup + milk + whippedCream); // 모카(휘핑 추가) 칼로리

// 노트북 용량 계산
function teraToGiga(tera) {
  console.log(tera + 'TB는');
  console.log(tera * 1024 + 'GB 입니다.');
};
function teraToMega(tera) {
  console.log(tera + 'TB는');
  console.log(tera * 1024 * 1024 + 'MB 입니다.');
};
// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);

// BMI 측정
function bmiCalculator(name, weight, tall) {
  let bmi = weight / (tall * tall / 10000);
  console.log(name + '님의 체질량지수는 ' + bmi + '입니다.');
};

// 테스트
bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);

// 이자 계산
function interestCalculator(myMoney, saveTerm, interestRate) {
  return myMoney * saveTerm * interestRate / 100;
};

// 조건 입력 테스트
let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');