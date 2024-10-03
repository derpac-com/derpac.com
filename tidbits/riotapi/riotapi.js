




document.getElementById("generate").addEventListener("click", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let tagline = document.getElementById("tagline").value;
    const apiKey = "RGAPI-361edfdb-6350-4945-b98e-001f67ac16f1"; 
    console.log(username,tagline,apiKey);

    fetchPUUID(username, tagline, apiKey);
});

async function fetchPUUID(username, tagline, apiKey) {
    const url = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/${tagline}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}