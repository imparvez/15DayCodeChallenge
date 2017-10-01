var plusButton = document.querySelector('.plus');
var minusButton = document.querySelector('.minus');
var additionalMembersContainer = document.querySelector('.additional-members');
var counter = 0;

plusButton.addEventListener('click', function(e){
    counter++;
    var newInputTextTag = document.createElement('input');
    newInputTextTag.setAttribute('type', 'text');
    newInputTextTag.setAttribute('class', 'div'+counter);
    additionalMembersContainer.appendChild(newInputTextTag);
})

minusButton.addEventListener('click', function(e){
    var getTag = document.querySelector('.div'+counter);
    console.log(getTag.remove());
    counter--;
})