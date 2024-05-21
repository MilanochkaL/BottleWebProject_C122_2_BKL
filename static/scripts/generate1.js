// Функция для добавления полей ввода в указанный контейнер
function addInputs1(inputContainer, count, color) {
    let numberOfInputs = parseInt(document.getElementById(count).value);
    if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 10) {
        alert('Введите корректное число от 1 до 10. В противном случае что-то может пойти не так!');
        return;
    }

    let container = document.getElementById(inputContainer); // Это место для новых полей
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // Освобождаем место от старых элементов
    }

    if (inputContainer != "inputContainer_first" && inputContainer != "inputContainer_second") {
        const solveButton = document.getElementById('solveButton');
        solveButton.style.display = 'inline-block';
        const generateButton = document.getElementById('generateButton');
        generateButton.style.display = 'inline-block';
    }

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
            input.value = "0";
            if (i === j) {
                input.value = "0";
                input.setAttribute('readonly', '');
                input.style = "width: 30px; margin: 3px; border-radius: 10px; border-width: 2px; border-style: solid;";
                input.style.borderColor = color;
            } else {
                input.value = "0";
                input.style = "width: 30px; margin: 3px; border-radius: 10px; border-width: 2px; border-style: solid;";
                input.style.borderColor = color;
                input.oninput = function () {
                    let input2 = document.getElementById(`dynamicInput${i}${j}${inputContainer}`); // Это место для новых полей
                    input2.value = input.value;
                };
            }
            input.name = `dynamicInput${i}`; // Имена для каждого поля для избежания ошибок
            input.id = `dynamicInput${j}${i}${inputContainer}`;
            container2.appendChild(input); // Добавляем новое поле в контейнер
            container2.appendChild(document.createElement('br')); // Предусматриваем дополнительное пространство между полями
        }
    }

    // Условия появления кнопок для страницы поиска подграфов
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
                row.push(0);
            }
            else if (i <= j) {
                row.push(Math.round(Math.random()));
            } else {
                row.push(matrix[j][i]);
            }
        }
        matrix.push(row);
    }
    return matrix;
}

function fillMatrixInputs(matrix, inputPrefix, inputContainer) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let input = document.getElementById(`${inputPrefix}${i}${j}${inputContainer}`);
            input.value = matrix[i][j];
        }
    }
}

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