function addInputs2() {
    let numberOfInputs = parseInt(document.getElementById('inputCount').value);
    if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 15) {
        alert('Введите корректное число от 1 до 15. В противном случае что-то может пойти не так!');
        return;
    }

    let container = document.getElementById('inputContainer'); // Получаем элемент с id 'inputContainer', где будут добавляться новые поля
    while (container.hasChildNodes()) { // Удаляем все дочерние элементы из контейнера
        container.removeChild(container.lastChild); // Удаляем последний дочерний элемент
    }

    let divNames = []; // Создаем массив для хранения имен новых div-элементов
    for (let j = 0; j < numberOfInputs; j++) { // Цикл для создания новых div-элементов
        let divName = `div${j}`; // Генерируем имя для каждого div-элемента
        divNames.push(divName); // Добавляем имя в массив

        let div = document.createElement('div'); // Создаем новый div-элемент
        div.id = divName; // Устанавливаем ему id
        div.style = "display: flex"; // Устанавливаем стиль для отображения в виде флекса
        container.appendChild(div); // Добавляем div-элемент в контейнер

        let container2 = document.getElementById(divName); // Получаем созданный div-элемент
        for (let i = 0; i < numberOfInputs; i++) { // Цикл для создания input-элементов внутри каждого div
            let input = document.createElement('input'); // Создаем новый input-элемент
            if (i === j) { // Если индексы совпадают, устанавливаем input как readonly
                input.value = "0"; // Устанавливаем значение по умолчанию
                input.setAttribute('readonly', ''); // Делаем input нередактируемым
                input.style = "width: 30px; margin: 3px; border-radius: 10px; border-color: #a8b1e5; border-width: 2px; border-style: solid;"; // Устанавливаем стиль
            } else { // Для остальных input
                input.value = "0"; // Устанавливаем значение по умолчанию
                input.style = "width: 30px; margin: 3px; border-radius: 10px; border-color: #a8b1e5; border-width: 2px; border-style: solid;"; // Устанавливаем стиль
                input.oninput = function () { // Обработчик события ввода данных
                    let input2 = document.getElementById(`dynamicInput${i}${j}`); // Получаем другой input по его id
                    input2.value = input.value; // Присваиваем ему значение текущего input
                };
            }
            input.name = `dynamicInput${j}${i}`; // Устанавливаем имя для input
            input.id = `dynamicInput${j}${i}`; // Устанавливаем id для input
            input.value = "0"; // Устанавливаем значение по умолчанию
            container2.appendChild(input); // Добавляем input в div

            container2.appendChild(document.createElement('br')); // Добавляем элемент 'br' для создания дополнительного пространства между полями
        }
    }
}