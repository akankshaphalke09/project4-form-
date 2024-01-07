function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;

    if (name === '' || email === '' || contact === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
        // You can add code here to submit the form data to a server or perform other actions.
    }
}
