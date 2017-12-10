function twoSum(arr, S){
    let hashtable = {},
        p = "";

    for(i = 0; i < arr.length; i++){
        let sumMinusElement = S - arr[i];

        if(hashtable[sumMinusElement] !== undefined){
            p = "<p>TRUE</p>";
            $('.result-wrapper').append(p);
            return true;
        }

        hashtable[arr[i]] = true;
    }

    p = "<p>FALSE</p>"
    $('.result-wrapper').append(p);
    return false;
}

$('#button').click(function(){
    $('.result-wrapper').empty();
    var inputArray = $('#array').val();
    var inputSum = $('#sum').val();
    var convertToArray = inputArray.split(" ");
    twoSum(convertToArray, inputSum);
});