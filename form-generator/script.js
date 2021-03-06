var plusButton = document.querySelector('.plus');
var minusButton = document.querySelector('.minus');
var additionalMembersContainer = document.querySelector('.additional-members');
var counter = 0;

plusButton.addEventListener('click', function(e){
    counter++;
    // Initaite New Info Container
    var newInfoContainer = document.createElement('div');
    newInfoContainer.setAttribute('class', 'div'+counter);

    // Initiate Header Tag
    var newHeaderTag = createElement('h2', 'header', 'Additional '+counter);
    // var newHeaderTag = document.createElement('h2');
    // newHeaderTag.setAttribute('class', 'header');
    // newHeaderTag.innerText = 'Additional '+counter;

    // Initiate New Input Name Tag
    var newInputTextTag = createElement('input', 'name name'+counter, null , 'text', 'Enter Person '+counter+' Name' );
    // var newInputTextTag = document.createElement('input');
    // newInputTextTag.setAttribute('type', 'text');
    // newInputTextTag.setAttribute('class', 'name name'+counter);
    // newInputTextTag.setAttribute('placeholder', 'Enter Person '+counter+ ' Name');

    // Initiate New Email Tag
    var newInputEmailTag = createElement('input', 'email email'+counter, null , 'email', 'Enter Person '+counter+' Email ID' );
    // var newInputEmailTag = document.createElement('input');
    // newInputEmailTag.setAttribute('type','email');
    // newInputEmailTag.setAttribute('class','email email'+counter);
    // newInputEmailTag.setAttribute('placeholder', 'Enter Person '+counter+ ' Email ID');

    // Initiate New Mobile Number Tag
    var newInputMobileNumber = createElement('input', 'mobile mobile'+counter, null , 'text', 'Enter Person '+counter+' Mobile Number' );
    // var newInputMobileNumber = document.createElement('input');
    // newInputMobileNumber.setAttribute('type', 'text');
    // newInputMobileNumber.setAttribute('class', 'mobile mobile'+counter);
    // newInputMobileNumber.setAttribute('placeholder', 'Enter Person '+counter+ ' Mobile Number');

    // Append all inside New Info Container
    newInfoContainer.innerHTML +=  newHeaderTag.outerHTML + newInputTextTag.outerHTML + newInputEmailTag.outerHTML + newInputMobileNumber.outerHTML;
    // newInfoContainer.appendChild(newHeaderTag);
    // newInfoContainer.appendChild(newInputTextTag);
    // newInfoContainer.appendChild(newInputEmailTag);
    // newInfoContainer.appendChild(newInputMobileNumber);

    // Append New Info Container inside additionalMembersContainer
    additionalMembersContainer.appendChild(newInfoContainer);
})

minusButton.addEventListener('click', function(e){
    var getTag = document.querySelector('.div'+counter);
    getTag.remove();
    counter--;
})

function createElement(tagName, className, innerText, type, placeHolder) {
    if(tagName) {
        var newTag = document.createElement(tagName);
    }

    if(className) {
        newTag.setAttribute('class', className);
    }

    if(innerText) {
        newTag.innerText = innerText;
    }

    if(type) {
        newTag.setAttribute('type', type);
    }

    if(placeHolder) {
        newTag.setAttribute('placeholder', placeHolder);
    }
    
    return newTag;
}