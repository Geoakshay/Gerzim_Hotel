function sendDataToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        alert('Please fill out all fields.');
        return;
    }

    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhoneNumber: ${subject}\nMessage: ${message}`;
    const whatsappNumber = '9486915224';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
    alert('Your message has been sucessfully sent');
}