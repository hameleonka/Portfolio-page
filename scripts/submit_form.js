var submitForm = document.querySelector('.contact-form');
var modalFormSuccesful = document.querySelector('#modalFormSuccesful');
var modalFormError = document.querySelector('#modalFormError');

submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var submitFormFieldName = document.querySelector('input#name').value;
    var submitFormFieldEmail = document.querySelector('input#email').value;
    var submitFormFieldMessage = document.querySelector('textarea#message').value;
    var xhr = new XMLHttpRequest();

    var body = 'name=' + encodeURIComponent(submitFormFieldName) +
        '&email=' + encodeURIComponent(submitFormFieldEmail) + '&message=' + encodeURIComponent(submitFormFieldMessage);

    xhr.open("POST", 'https://mail-backend.herokuapp.com/send', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
            $(modalFormSuccesful).modal("show");
            submitFormFieldName = '';
            submitFormFieldEmail= '';
            submitFormFieldMessage= '';
        };
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
            console.log(xhr.responseText);
            $(modalFormError).modalFormSuccesful.modal("show");
        };
    };
    xhr.send(body);
    return false;
});