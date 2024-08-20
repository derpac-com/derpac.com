var apiKey = "2c5491d01f95d7366d37f03f6130de30";
var apiSecret = "25a80c63a6eeeea44229dd7e5b7385da";

const url = `https://ws.audioscrobbler.com/2.0/?method=auth.getToken&api_key=${apiKey}&format=json`;

async function getToken() {
    const url = `https://ws.audioscrobbler.com/2.0/?method=auth.getToken&api_key=${apiKey}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data.token;
}

function redirectToLastFmAuth(token) {
    // const callbackUrl = encodeURIComponent('https://derpac.com/tidbits/lastfm-tidbit/authed/');
    const authUrl = `https://www.last.fm/api/auth/?api_key=${apiKey}&token=${token}`;
    window.open(authUrl, '_blank');
}

async function getSessionKey(token) {
    const signature = md5(`api_key${apiKey}methodauth.getSessiontoken${token}${apiSecret}`);
    const url = `https://ws.audioscrobbler.com/2.0/?method=auth.getSession&api_key=${apiKey}&token=${token}&api_sig=${signature}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data.session.key;
}

async function getUserRecentTracks(user, sessionKey) {
    const method = 'user.getRecentTracks';
    const apiSig = md5(`api_key${apiKey}method${method}sk${sessionKey}user${user}${apiSecret}`);
    const url = `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${user}&api_key=${apiKey}&sk=${sessionKey}&api_sig=${apiSig}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data.recenttracks.track;
}
// user must enter username
// if username is entered allow generate charts button
const button = document.getElementById("generate");
const input = document.getElementById("username");
input.addEventListener("input", function(){

button.disabled = false;

});

button.addEventListener("click", async () => {
    const token = await getToken();
    redirectToLastFmAuth(token);
});
// when generating charts button is clicked:

// const token = await getToken();
// redirectToLastFmAuth(token);
let username = input.value;
//then post auth:
// console.log(username);


// async function handlePostAuth() {
//     const params = new URLSearchParams(window.location.search);
//     if (params.has('token')) {
//         console.log("gamer!!!!");
//         const token = params.get('token');
//         const sessionKey = await getSessionKey(token);
//         const user = "derapc";  // Replace with the Last.fm username
//         const tracks = await getUserRecentTracks(user, sessionKey);

//         // Display the tracks on the page
//         const tracksDiv = document.getElementById('tracks');
//         tracksDiv.innerHTML = tracks.map(track => `
//             <p>${track.artist['#text']} - ${track.name}</p>
//         `).join('');
//     }
// }

// handlePostAuth();