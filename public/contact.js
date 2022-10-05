const firstName = document.querySelector('#first-name').value;
const lastName = document.querySelector('#last-name').value;
const subject = document.querySelector('#subject-line').value;
const email = document.querySelector('#user-email').value;
const message = document.querySelector('#user-message').value;
const submit = document.querySelector('#submit');

submit.addEventListener("click", function(event){
    event.preventDefault();
    if (firstName && message) {
        const recipe = {
            firstName: firstName,
            lastName: lastName,
            subject: subject,
            email: email,
            message: message
        };
    } else {
        alert("need first name and message to contact us")
    }
});
