function fizzBuzz(arr){
    if(arr.length != 0) {
        let result = [],
            p = "";
        
            for(let i = 1; i <= arr; i++) {
                let sum = "";
        
                if(i % 3 === 0) { sum += "Fizz" };
        
                if(i % 5 === 0) { sum += "Buzz" };
        
                if(sum === '') {
                    result.push(i);
                } else {
                    result.push(sum);
                }
            }
            
            renderList(result);
    } else {
        $('.result-wrapper').text('Please enter something in the text box');
    }
}

var renderList = function(givenArray){
    $('.result-wrapper').empty();
    var p = "";
    for(index in givenArray){
        console.log(givenArray[index]);
        p += "<p>"+givenArray[index]+"</p>";
    }
    $('.result-wrapper').append(p);
}


$('#button').click(function(){
    var arrayRange = $('#array').val();
    fizzBuzz(arrayRange);
});