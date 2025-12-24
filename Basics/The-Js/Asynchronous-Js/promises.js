const fetchData = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Data fetched");
            }
            else{
                reject("Data not fetched");
            }
        }, 2000)
    });
}

console.log(typeof(fetchData()));
console.log(fetchData());
fetchData()
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})