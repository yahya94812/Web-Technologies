// Fetch api is the modern way to make HTTP requests

// fetch("https://randomuser.me/api")
// .then((response) => {
//     return response.json()
// })
// .then(data =>{ // the overall .then() method is used for sequential execution of code
//     console.log("hay"); // this .then() blocks are asynchronous
//     console.log(data);
// })

// fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true")
// .then((response)=> response.json())
// .then(data => console.log(data));

async function fetchData(){
    try{
        // BASE_URL = "https://randomuser.me/api";
        BASE_URL = "http://127.0.0.1:8000/items/";
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchData(); // this function is asynchronous i.e.. it contains await keyword for asynchronous operations and the whole function is executed as synchronous code


