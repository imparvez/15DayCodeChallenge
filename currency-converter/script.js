var api_access_key = 'c473281947506481724431d5bee3bbeb';
var api_domain_name = 'www.apilayer.net';
var URL = 'http://'+api_domain_name+'/api/live?access_key='+api_access_key;

var usd = document.querySelector('#usd');
var resultBox = document.querySelector('#result');

usd.addEventListener('input', getCurrency);

function getCurrency(){
    var value = usd.value;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', URL);

    xhr.onload = function(){
        var parseJSON = JSON.parse(this.responseText);
        var usdinr = parseJSON.quotes.USDINR;
        var result = value * usdinr;
        resultBox.innerText = result;
    }
    xhr.send();
}

