let packsValue = 1,                                                         // Перемнная ввода кол-ва паков для покупки
    buyerInterval = setInterval(buyer, 1),                                  // Старт функции покупки с интервалом опроса 1мс
    switcher = true,
    countInterval;
 

function buyer() {                                                          // Окно покупки
    if (document.querySelector('.css-ky47dt').querySelector('button')) {    // Если есть кнопка покупки
        const block = document.querySelector('.css-ky47dt'),                // Блок продажи
              buyBtn = block.querySelector('button');                       // Кнопка покупки
        countInterval = setInterval(clicker, 1);                            // Имитация нажатия кнопки +
        if (switcher == false) {
            buyBtn.click();                                                 // Клик по кнопке покупки
            clearInterval(buyerInterval);                                   // Остановка интервала
            setInterval(apply, 1);                                          // Старт функции подтверждения с интервалом опроса 1мс
        }
    } else {
        console.log('waiting selling time');
    }
}
function clicker() {                                                        // Работа с input
    if (packsValue-1 != 0) {
        document.querySelector('.css-1my7wuf').nextElementSibling.click();  // Клик по кнопке +
        packsValue -= 1;
    } else {
        switcher = false;
        clearInterval(countInterval);
    }
}
