var body = document.querySelector('body');
body.style.transition = '0.5s ease';
var colorArray = ['#1abc9c', '#2ecc71', '#3498db', '#e67e22', '#f39c12', '#e74c3c', '#c0392b'];
var counter = 0;

body.addEventListener('click', function(){
    if( counter >= colorArray.length ) {
        counter = 0;
    }
    body.style.background = colorArray[counter];
    counter++;
});