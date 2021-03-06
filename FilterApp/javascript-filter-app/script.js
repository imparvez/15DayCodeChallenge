var fruitArray = ['apple', 'grapes', 'banana', 'watermelon', 'manoges']; // Define the array
var searchInput = document.getElementById('searchInput'); // target the input box
var resultData = document.getElementById('resultData'); // Get the container in which the array's list will be inserted

/************Render part is done***************/
var renderList = function(fruitArray){
    var li = "";
    for(index in fruitArray){
        li += "<li>"+fruitArray[index]+"</li>";
    }
    resultData.innerHTML = li;
}

renderList(fruitArray);

/************Filter***************/
var filterUsers = function(event){
    var value = searchInput.value;
    
    filterUsers = fruitArray.filter(function(fruits){
        var fruits = fruits.toLowerCase();
        return fruits.indexOf(value) > -1;
    });

    renderList(filterUsers);
}

searchInput.addEventListener('keyup', filterUsers);