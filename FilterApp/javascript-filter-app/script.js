var fruitArray = ['Apple', 'Grapes', 'Banana', 'WaterMelon', 'Manoges'];
var searchInput = document.getElementById('searchInput');
var resultData = document.getElementById('resultData');

var fruitList = fruitArray
    .map(function (fruit, index) {
        var li = document.createElement("li");
        li.innerText = fruit;
        resultData.appendChild(li);
    });
    
searchInput.addEventListener('input', function(e){
    console.log('EVENT FILTER => ', e.target.value);
});
