const Name = document.querySelector('#customerName').value;
const email = document.querySelector('#customerEmail').value;
const message = document.querySelector('#customerMssg').value;
const submit = document.querySelector('#submit');

submit.addEventListener("click", function(event){
    event.preventDefault();
    if (Name && email && message) {
        const userContact = {
            Name,
            email,
            message
        };
    } else {
        alert("need first name and message to contact us")
    }
});
