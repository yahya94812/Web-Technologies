// setTimeout(() => console.log("hay"), 1000);

//creating promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("i got a success");
      } else {
        reject("failure is the part of success");
      }
    },200); 
  });
};

fetchData().then((response) => console.log(response));

const  asy = async (callback) =>{
    let response = await fetchData();
    console.log(response);
    callback();
}

// asy();

console.log("hay");
asy(()=>console.log("bye"));


async function apiFetch(){
    let data;
  
    data = await fetch("https://randomuser.me/api/");
    console.log(data);
    console.log(data.body);
    let formatted = data.json();
    console.log(formatted)
    // console.log(data.json)
}
apiFetch()