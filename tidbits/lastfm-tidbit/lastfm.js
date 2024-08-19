var apiKey = "721f2a421b78039ea77af1611373cea5";
var sharedSecret = "5647263bccba624d7535a1edacf41ee9";
var apiUrl = `http://www.last.fm/api/auth/?${apiKey}`



function getData(){
    const requestOptions = {
    method: 'GET',
    };

    fetch(apiUrl, requestOptions)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
       
        }
        return response.json();
    })
    .then(data => {   
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

getData();