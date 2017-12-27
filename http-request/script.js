// Sample: http://food2fork.com/api/search?key=f2b644656f8e3be14149734e17bc007a
var API_BASE_URI = 'http://food2fork.com/api/';
var API_KEY = 'f2b644656f8e3be14149734e17bc007a';
var URL = API_BASE_URI + `/search?key=` + API_KEY;


// 1. With AXIOS
axios.get(URL)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// 2. Fetch API (https://davidwalsh.name/fetch)
fetch(URL)
    .then(function(response) {
        console.log('FETCH => ', response);
    }).catch(function(err) {
        console.log(err);
    });

// 3. AJAX (https://www.w3schools.com/xml/dom_httprequest.asp)
var xhr = new XMLHttpRequest(); // All modern browsers have a built-in XMLHttpRequest object to request data from a server.
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log('AJAX =>', xhr.responseText);
    }
}
xhr.open('GET', URL, true);
xhr.send(null);

// 4. Using Jquery
$.ajax({
    url: URL,
    type: 'GET',
    success: function(responseText){
        var jsonData = JSON.stringify(responseText); 
        myArr = JSON.parse(jsonData );   // parsing JSON
        console.log('JQUERY => ', myArr);
    }
});

$.get(URL, function(data) {
    var myArr = JSON.parse(data);   // parsing JSON
    console.log('GET => ', myArr);
});