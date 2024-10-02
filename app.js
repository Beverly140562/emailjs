(function() {
    emailjs.init("DLJw8dosxB0vFafya");
})();


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log(this)
    emailjs.sendForm("service_vqsnf7r", "template_ynu4v9d", this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send email: ' + JSON.stringify(error));
        });
});
