// ������� ��� ���������� ����� ����� � ��������� ���������
function addInputs1(inputContainer, count, color) {
    let numberOfInputs = parseInt(document.getElementById(count).value); // Получаем количество входов
    if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 10) { // Проверяем на корректность введенного значения
        alert('Введите корректное число от 1 до 10. В противном случае что-то может пойти не так!'); // Выводим сообщение об ошибке
        return; // Завершаем функцию
    }

    const generateButton = document.getElementById('generateButton'); // Получаем кнопку "Генерировать"
    generateButton.style.display = 'inline-block'; // Устанавливаем видимость кнопки

    let container = document.getElementById(inputContainer); // Получаем контейнер для полей
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // Удаляем старые элементы из контейнера
    }

    if (inputContainer != "inputContainer_first" && inputContainer != "inputContainer_second") {
        const solveButton = document.getElementById('solveButton');
        solveButton.style.display = 'inline-block';
        const generateButton = document.getElementById('generateButton');
        generateButton.style.display = 'inline-block';
    }

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
            input.name = `dynamicInput${i}`; // ����� ��� ������� ���� ��� ��������� ������
            input.id = `dynamicInput${j}${i}${inputContainer}`;
            container2.appendChild(input); // ��������� ����� ���� � ���������
            container2.appendChild(document.createElement('br')); // ��������������� �������������� ������������ ����� ������
        }
    }

    // ������� ��������� ������ ��� �������� ������ ���������
    if (document.getElementById('inputContainer_first').childElementCount > 0) {
        const genBtn1 = document.getElementById('genBtn1');
        genBtn1.style.display = 'inline-block';
        const showGraph1 = document.getElementById('showGraph1');
        showGraph1.style.display = 'inline-block';
    }
    if (document.getElementById('inputContainer_second').childElementCount > 0) {
        const genBtn2 = document.getElementById('genBtn2');
        genBtn2.style.display = 'inline-block';
        const showGraph2 = document.getElementById('showGraph2');
        showGraph2.style.display = 'inline-block';
    }

    if (document.getElementById('inputContainer_second').childElementCount != 0 && document.getElementById('inputContainer_first').childElementCount != 0) {
        const solveButton1 = document.getElementById('solveButton1');
        solveButton1.style.display = 'inline-block';
    }
}


function generateMatrix(size, inputContainer) {
    let numberOfInputs = parseInt(document.getElementById(size).value); // Получаем количество входов
    let matrix = generateSymmetricMatrix(numberOfInputs); // Генерируем симметричную матрицу
    fillMatrixInputs(matrix, 'dynamicInput', inputContainer); // Заполняем поля ввода матрицы
}

// ������� ��������� ������������ ������� ��������� �������
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

    // �������� ������
    for (let i = 0; i < matrixRows.length; i++) {
        nodes.push({ id: i + 1, label: `${i + 1}` }); // ��������� ���� � id � ������ (����� ����)
    }

    // �������� �����
    for (let i = 0; i < matrixRows.length; i++) {
        let rowInputs = matrixRows[i].children; // �������� �������� �������� ������� ������ �������
        for (let j = 0; j < rowInputs.length; j++) {
            let inputValue = rowInputs[j].value; // Получаем значение текущего input
            if (inputValue === '1' && i !== j) { // Если значение равно '1' и это не диагональный элемент
                if (!edges.some(edge => (edge.from === i + 1 && edge.to === j / 2 + 1) || (edge.from === j / 2 + 1 && edge.to === i + 1))) {
                    edges.push({ from: i + 1, to: j / 2 + 1 }); // ��������� ����� � ������ edges
                }
            }
        }
    }

    let networkContainer = document.getElementById(`mynetwork${graph}`);
    let data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges)
    };
    var options = {
        physics: {
            enabled: true,
            barnesHut: {
                gravitationalConstant: -2000,
                centralGravity: 0.3,
                springLength: 95,
                springConstant: 0.04,
                damping: 0.09
            },
            maxVelocity: 50,
            minVelocity: 0.1,
            timestep: 0.5,
            repulsion: {
                nodeDistance: 100, // расстояние, на котором узлы начинают отталкиваться
                centralGravity: 0.2, // "гравитация" узлов к центру контейнера
                springLength: 200, // длина пружин между узлами
                springConstant: 0.05 // жесткость пружин
            }
        },
        interaction: {
            dragNodes: true,
            dragView: true,
            zoomView: false
        },
        nodes: {
            fixed: false // разрешить узлам перемещаться
        }
    };

    var network = new vis.Network(networkContainer, data, options);
    network.fit();
}