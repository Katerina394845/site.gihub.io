// Функция для воспроизведения звука клика
function playClickSound() {
    const clickSound = document.getElementById('click-sound');
    clickSound.play();
}

// Функция для обработки отправки формы
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('form-message');
    const successSound = document.getElementById('success-sound');

    if (name && email) {
        messageElement.textContent = `Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.`;
        messageElement.style.color = 'green';
        successSound.play(); // Проиграть звук успеха
        event.target.reset();
    } else {
        messageElement.textContent = 'Пожалуйста, заполните все поля.';
        messageElement.style.color = 'red';
    }
}

// Прокрутка к форме
function scrollToForm() {
    const formSection = document.getElementById('contact-form');
    formSection.scrollIntoView({ behavior: 'smooth' });
}
