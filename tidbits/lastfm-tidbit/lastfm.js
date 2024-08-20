var apiKey = "b87d33ceea7144e501cb8dab7b2e30ef";
var apiSecret = "b101531f79c82ceb222b00b07bdf1677";

const url = `https://ws.audioscrobbler.com/2.0/?method=auth.getToken&api_key=${apiKey}&format=json`;

async function getToken() {
    const url = `https://ws.audioscrobbler.com/2.0/?method=auth.getToken&api_key=${apiKey}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data.token;
}

function redirectToLastFmAuth(token) {
    const callbackUrl = encodeURIComponent('https://derpac.com/tidbits/lastfm-tidbit/');
    const authUrl = `http://www.last.fm/api/auth/?api_key=${apiKey}&token=${token}&cb="${callbackUrl}`;
    window.location.href = authUrl;
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
async function handlePostAuth() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('token')) {
        const token = params.get('token');
        const sessionKey = await getSessionKey(token);
        const user = username;  // Replace with the Last.fm username
        const tracks = await getUserRecentTracks(user, sessionKey);

        // Display the tracks on the page
        const tracksDiv = document.getElementById('tracks');
        tracksDiv.innerHTML = tracks.map(track => `
            <p>${track.artist['#text']} - ${track.name}</p>
        `).join('');
    }
}

handlePostAuth();