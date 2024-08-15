const textDisplay = document.getElementById('textDisplay');
const textEdit = document.getElementById('textEdit');

document.addEventListener('keydown', function(event) {
    // Ctrl + E для редагування тексту
    if (event.ctrlKey && event.key === 'e') {
        event.preventDefault(); // Вимикаємо поведінку за замовчуванням
        startEditing();
    }

    // Ctrl + S для збереження тексту
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Вимикаємо поведінку за замовчуванням
        saveText();
    }
});

function startEditing() {
    textEdit.value = textDisplay.innerText; // Передаємо текст у textarea
    textDisplay.style.display = 'none';
    textEdit.style.display = 'block';
    textEdit.focus(); // Фокус на textarea для зручності редагування
}

function saveText() {
    textDisplay.innerText = textEdit.value; // Передаємо змінений текст назад у div
    textEdit.style.display = 'none';
    textDisplay.style.display = 'block';
}