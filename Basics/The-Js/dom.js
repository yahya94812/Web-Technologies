document.getElementById("button1").addEventListener("click", () => {
  alert("xyz is clicked!");
  myThoughts.innerHTML= "";
});

const myThoughts = document.getElementById("myThoughts");
document.getElementById("button2").addEventListener("click", () => {
    myThoughts.innerText = "hello"
});
