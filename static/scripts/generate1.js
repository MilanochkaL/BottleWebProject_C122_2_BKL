// Функция для добавления полей ввода в указанный контейнер
function addInputs1(inputContainer, count, color) {
    let numberOfInputs = parseInt(document.getElementById(count).value);
    if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 15) {
        alert('Введите корректное число от 1 до 15. В противном случае что-то может пойти не так!');
        return;
    }

    let container = document.getElementById(inputContainer); // Это место для новых полей
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // Освобождаем место от старых элементов
    }

    const solveButton = document.getElementById('solveButton');
    solveButton.style.display = 'inline-block';
    const generateButton = document.getElementById('generateButton');
    generateButton.style.display = 'inline-block';

    let divNames = [];
    for (let j = 0; j < numberOfInputs; j++) {
        let divName = `div${j}${inputContainer}`;
        divNames.push(divName);

        let div = document.createElement('div');
        div.id = divName;
        div.style = "display: flex"
        container.appendChild(div); // Добавляем новое поле в контейнер

        let container2 = document.getElementById(divName); // Это место для новых полей
        for (let i = 0; i < numberOfInputs; i++) {
            let input = document.createElement('input');
            // Конфигурация стилей и значений полей ввода
        }
    }
}


function generateMatrix(size, inputContainer) {
    let numberOfInputs = parseInt(document.getElementById(size).value);
    let matrix = generateSymmetricMatrix(numberOfInputs);
    fillMatrixInputs(matrix, 'dynamicInput', inputContainer);
}

// Функция генерации симметричной матрицы заданного размера
function generateSymmetricMatrix(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            if (i == j) {
                row.push(0); // Заполняем диагональные элементы нулями
            }
            else if (i <= j) {
                row.push(Math.round(Math.random())); // Заполняем верхний треугольник случайными значениями 0 или 1
            } else {
                row.push(matrix[j][i]); // Копируем значение из соответствующего элемента нижнего треугольника для обеспечения симметричности матрицы
            }
        }
        matrix.push(row); // Добавляем строку в матрицу
    }
    return matrix; // Возвращаем сгенерированную симметричную матрицу
}

// Функция для заполнения полей ввода матрицы значениями из заданной матрицы
function fillMatrixInputs(matrix, inputPrefix, inputContainer) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let input = document.getElementById(`${inputPrefix}${i}${j}${inputContainer}`); // Получаем поле ввода по идентификатору
            input.value = matrix[i][j]; // Устанавливаем значение поля ввода равным значению из матрицы
        }
    }
}

// Функция для создания графа на основе матрицы смежности
function createGraph1(inputCont, graph) {
    let container = document.getElementById(graph);
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    let div = document.createElement('div');
    div.id = `mynetwork${graph}`;
    div.className = "mynetwork";
    container.appendChild(div);

    let inputContainer = document.getElementById(inputCont);
    let matrixRows = inputContainer.children;
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
                // Проверяем, что такого ребра еще нет в массиве edges
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