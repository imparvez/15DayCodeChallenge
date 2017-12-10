function passwordGenerator(){
    var password = "";
    var passwordLength = 6;
    var characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    for(var i = 0; i < passwordLength; i++){
      password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return password;
  }
  
  $('#button').click(function(){
    $('#pass').text(passwordGenerator());
  });