function greet(name) {
    console.log("hello," + name);
}
function sayHello(callback) {
    let name = "Alice";
    callback(name);
} 
// function sayHello(name, callback) {
//     let name = "Alice";
//     callback(name);
// }
function sayHello2(callback) {
    let name = "Inpa";
    callback(name);
}

sayHello(greet);
sayHello2(greet);
