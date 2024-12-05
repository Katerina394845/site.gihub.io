// Проигрывание звука клика
function playClickSound() {
    const clickSound = document.getElementById('click-sound');
    clickSound.play();
}

// Обработка отправки формы
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageElement = document.getElementById('form-message');
    const successSound = document.getElementById('success-sound');

    if (name && email && message) {
        messageElement.textContent = `Спасибо, ${name}! Ваше сообщение отправлено.`;
        messageElement.style.color = 'green';
        successSound.play();
        event.target.reset();
    } else {
        messageElement.textContent = 'Пожалуйста, заполните все поля.';
        messageElement.style.color = 'red';
    }
}

// Прокрутка к разделу
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
