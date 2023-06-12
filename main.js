function toggleText(blockNumber) {
    var hiddenText = document.getElementById("hiddenText" + blockNumber);

    // Закрити всі інші блоки перед відкриттям поточного
    var allHiddenTexts = document.querySelectorAll('[id^="hiddenText"]');
    for (var i = 0; i < allHiddenTexts.length; i++) {
        if (allHiddenTexts[i] !== hiddenText) {
            allHiddenTexts[i].style.display = "none";
            allHiddenTexts[i].parentNode.style.backgroundColor = ""; // Змінюємо колір фону на значення за замовчуванням
        }
    }

    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
        hiddenText.parentNode.style.backgroundColor = "white"; // Змінюємо колір фону при відкритті блоку
    } else {
        hiddenText.style.display = "none";
        hiddenText.parentNode.style.backgroundColor = ""; // Змінюємо колір фону на значення за замовчуванням при закритті блоку
    }
}


