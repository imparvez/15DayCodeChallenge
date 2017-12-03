var fruitArray = ['apple', 'grapes', 'banana', 'watermelon', 'manoges']; // Define the array
var searchInput = $('#searchInput'); // target the input box
var resultData = $('#resultData'); // Get the container in which the array's list will be inserted

/************Render part is done***************/
var renderList = function(fruitArray){
    var li = "";
    for(index in fruitArray){
        li += "<li>"+fruitArray[index]+"</li>";
    }
    resultData.html(li);
}

renderList(fruitArray);

/************Filter***************/

searchInput.keyup(function(event){
    var value = searchInput.val();

    filterUsers = fruitArray.filter(function(fruits){
        var fruits = fruits.toLowerCase();
        return fruits.indexOf(value) > -1;
    });

    renderList(filterUsers);
});
