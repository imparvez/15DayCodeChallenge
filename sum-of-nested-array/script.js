$('#button').click(function(){
    var string = $('#array').val();
    var array = JSON.parse("["+string+"]");
    $('.result-wrapper').text(sumOfNestedArray(array));
});

function sumOfNestedArray(arr){
    $('.result-wrapper').empty();
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number'){
            result += sumOfNestedArray(arr[i]);
        } else {
            result += arr[i]
        }
    }
    return result;
}