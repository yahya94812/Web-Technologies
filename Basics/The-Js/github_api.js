async function getGithubRepo(){
    const response = await fetch("https://api.github.com/users/YahyaWorld/repos");
    const repos = await response.json();
    console.log(repos);
}
getGithubRepo()