var result = [];

  result[0] = 0;
  result[1] = 1;

  $('#button').click(function(){
    let getValue = $('#number').val();
    $('.result-wrapper').empty();
    for(var i = 2; i <= getValue; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    for(var i = 0; i <= getValue; i++){
      $('.result-wrapper').append('<p>'+result[i]+'</p>')
    }
  })

// function fibonacci(n){
//   if(n <= 1)
//      return n;
//   return fibonacci(n-1) + fibonacci(n-2);
// }

// $('#button').click(function(){
//   $('.result-wrapper').append("<p>" + fibonacci($('#number').val()) + "</p>");
// });