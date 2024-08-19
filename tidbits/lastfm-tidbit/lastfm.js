var apiKey = "b87d33ceea7144e501cb8dab7b2e30ef";
var sharedSecret = "b101531f79c82ceb222b00b07bdf1677";
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