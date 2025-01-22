window.onload = function () {
    const inputFields = document.querySelectorAll('.contact-form input, .contact-form textarea');

    inputFields.forEach((input) => {
        input.addEventListener('focus', () => {
            input.previousElementSibling.style.transform = 'translate(-50%, -120%) scale(0.8)';
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.previousElementSibling.style.transform = 'translate(-50%, -50%)';
            }
        });

        if (input.value) {
            input.previousElementSibling.style.transform = 'translate(-50%, -120%) scale(0.8)';
        }
    });
};
