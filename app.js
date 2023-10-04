// 정적인 함수 선언 방식(정해놓는 방식)
function three(number) {
    if(typeof(number) === "number") {
        return `${number / 10}`;
    }
}

const threeResult = three(100);
// console.log(threeResult);
// 정적으로 타입 검사 후, 동적으로 로직 작성
// 호출할 "때" 로직을 작성하기 때문에 장단점이 공존한다.
function four(number, callback) {
    if(typeof(number) === "number") {
        return callback(number);
    }
}
// 매개변수 number라는 것을 활용한 four함수를 실행 후 callback함수를 실행하세요!! 리턴도 좋고 타 함수도 좋습니다. 
// 다시말하면 기존 함수 실행시 다른 함수가 절차적으로 실행될 수 있게 함수를 매개변수로 넣은 형태

let fourResult = four(1, function(number) {
    return`${number/10}`;
})
console.log(fourResult);
// 문제가 발생하였으나 return에 매개변수를 넣어줬어야함 헷갈리지 말자
