// 정적인 함수 선언 방식(정해놓는 방식)
function three(number) {
    if(typeof(number) === "number") {
        return `${number / 10}`;
    }
}

const threeResult = three(100);
console.log(threeResult);