function addInputs1(inputContainer, count, color) {
    let numberOfInputs = parseInt(document.getElementById(count).value); // Получаем количество входов
    if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 15) { // Проверяем на корректность введенного значения
        alert('Введите корректное число от 1 до 15. В противном случае что-то может пойти не так!'); // Выводим сообщение об ошибке
        return; // Завершаем функцию
    }

    const generateButton = document.getElementById('generateButton'); // Получаем кнопку "Генерировать"
    generateButton.style.display = 'inline-block'; // Устанавливаем видимость кнопки

    let container = document.getElementById(inputContainer); // Получаем контейнер для полей
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // Удаляем старые элементы из контейнера
    }

    const solveButton = document.getElementById('solveButton'); // Получаем кнопку "Решить"
    solveButton.style.display = 'inline-block'; // Устанавливаем видимость кнопки

    let divNames = [];
    for (let j = 0; j < numberOfInputs; j++) {
        let divName = `div${j}${inputContainer}`; // Генерируем имя для нового div
        divNames.push(divName); // Добавляем имя в массив

        let div = document.createElement('div'); // Создаем новый div
        div.id = divName; // Устанавливаем id для div
        div.style.display = "flex"; // Устанавливаем стиль для flex
        container.appendChild(div); // Добавляем div в контейнер

        let container2 = document.getElementById(divName); // Получаем внутренний контейнер
        for (let i = 0; i < numberOfInputs; i++) {
            let input = document.createElement('input'); // Создаем новый input
            input.value = "0"; // Устанавливаем значение по умолчанию
            if (i === j) {
                input.value = "0"; // Устанавливаем значение 0 для диагональных элементов
                input.setAttribute('readonly', ''); // Устанавливаем только для чтения
                input.style = "width: 30px; margin: 3px; border-radius: 10px; border-width: 2px; border-style: solid;"; // Устанавливаем стиль для input
                input.style.borderColor = color; // Устанавливаем цвет рамки
            } else {
                input.value = "0"; // Устанавливаем значение 0 для остальных элементов
                input.style = "width: 30px; margin: 3px; border-radius: 10px; border-width: 2px; border-style: solid;"; // Устанавливаем стиль для input
                input.style.borderColor = color; // Устанавливаем цвет рамки
                input.oninput = function () {
                    let input2 = document.getElementById(`dynamicInput${i}${j}${inputContainer}`); // Получаем второй input
                    input2.value = input.value; // Устанавливаем значение второго input равным первому
                };
            }
            input.name = `dynamicInput${i}`; // Устанавливаем имя для избежания ошибок
            input.id = `dynamicInput${j}${i}${inputContainer}`; // Устанавливаем id для input
            container2.appendChild(input); // Добавляем input во внутренний контейнер
            container2.appendChild(document.createElement('br')); // Добавляем пробел между полями
        }
    }
}

function generateMatrix(size, inputContainer) {
    let numberOfInputs = parseInt(document.getElementById(size).value); // Получаем количество входов
    let matrix = generateSymmetricMatrix(numberOfInputs); // Генерируем симметричную матрицу
    fillMatrixInputs(matrix, 'dynamicInput', inputContainer); // Заполняем поля ввода матрицы
}

function generateSymmetricMatrix(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            if (i === j) {
                row.push(0); // Диагональный элемент устанавливаем равным 0
            }
            else if (i <= j) {
                row.push(Math.round(Math.random())); // Генерируем случайное значение для верхнего треугольника
            } else {
                row.push(matrix[j][i]); // Для нижнего треугольника берем значение симметрично относительно главной диагонали
            }
        }
        matrix.push(row); // Добавляем строку в матрицу
    }
    return matrix;
}

function fillMatrixInputs(matrix, inputPrefix, inputContainer) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let input = document.getElementById(`${inputPrefix}${i}${j}${inputContainer}`); // Получаем элемент input по id
            input.value = matrix[i][j]; // Устанавливаем значение в элемент input
        }
    }
}

function createGraph1(inputCont, graph) {
    let container = document.getElementById(graph); // Получаем контейнер для графа
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // Удаляем предыдущий граф
    }
    let div = document.createElement('div'); // Создаем новый div
    div.id = `mynetwork${graph}`; // Устанавливаем id для нового div
    div.className = "mynetwork"; // Устанавливаем класс для нового div
    container.appendChild(div); // Добавляем новый div в контейнер

    let inputContainer = document.getElementById(inputCont); // Получаем контейнер с входами
    let matrixRows = inputContainer.children; // Получаем строки матрицы
    let nodes = [];
    let edges = [];

    // Создание вершин
    for (let i = 0; i < matrixRows.length; i++) {
        nodes.push({ id: i + 1, label: `${i + 1}` }); // Добавляем узел с id и меткой (номер узла)
    }

    // Создание ребер
    for (let i = 0; i < matrixRows.length; i++) {
        let rowInputs = matrixRows[i].children; // Получаем дочерние элементы текущей строки матрицы
        for (let j = 0; j < rowInputs.length; j++) {
            let inputValue = rowInputs[j].value; // Получаем значение текущего input
            if (inputValue === '1' && i !== j) { // Если значение равно '1' и это не диагональный элемент
                if (!edges.some(edge => (edge.from === i + 1 && edge.to === j / 2 + 1) || (edge.from === j / 2 + 1 && edge.to === i + 1))) {
                    edges.push({ from: i + 1, to: j / 2 + 1 }); // Добавляем ребро в массив edges
                }
            }
        }
    }

    let networkContainer = document.getElementById(`mynetwork${graph}`);
    let data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges)
    };
    let options = {};
    let network = new vis.Network(networkContainer, data, options);
}