async function fetchApi(){
    // let response = await fetch("https://randomuser.me/api/");

    let response = await fetch("http://0.0.0.0:8000/");//it receive only the response object containing header, status etc not body
    if(!response.status==200){
        throw new Error("Error: bad request");
    }
    //body is streamed currently 
    
    let body = await response.json();//it ensure download complete body and parse it in json
    return body;
}

let data = await fetchApi();
console.log(data)