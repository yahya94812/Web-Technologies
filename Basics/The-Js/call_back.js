function call_back(callback) {
    setTimeout(callback, 0);
    

}
function say_mid() {
    console.log("mid");
}

console.log("start");
call_back(say_mid);
console.log("end");