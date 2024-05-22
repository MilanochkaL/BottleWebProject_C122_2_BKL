//Функция для генерации выводла графа и вызова решения
function addGraph(num) {
    if (num === '3') {
        Euler_cycle_js();
    }
    if (num === '2') {
        Nodes_in_a_graph_js();
    }

    let container = document.getElementById('graph_div'); // Получаем контейнер для графа
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // Удаляем содержимое контейнера
    }
    let div = document.createElement('div'); // Создаем новый элемент div
    div.id = "mynetwork"; // Устанавливаем id для div
    div.className = "mynetwork"; // Устанавливаем класс для div
    container.appendChild(div); // Добавляем div в контейнер

    let inputContainer = document.getElementById('inputContainer2'); // Получаем контейнер с входами
    let matrixRows = inputContainer.children; // Получаем строки матрицы
    let nodes = [];
    let edges = [];

    // Создание вершин графа
    for (let i = 0; i < matrixRows.length; i++) {
        nodes.push({ id: i + 1, label: `${i + 1}` }); // Добавляем узел с id и меткой (номер узла)
    }

    // Создание ребер графа
    for (let i = 0; i < matrixRows.length; i++) {
        let rowInputs = matrixRows[i].children; // Получаем дочерние элементы текущей строки матрицы
        for (let j = 0; j < rowInputs.length; j++) {
            let inputValue = rowInputs[j].value; // Получаем значение текущего input
            if (isNaN(inputValue))
                inputValue = 0;
            if (inputValue === '1' && i !== j) { // Если значение равно '1' и это не диагональный элемент
                // Проверяем, что такого ребра еще нет в массиве edges
                if (!edges.some(edge => (edge.from === i + 1 && edge.to === j / 2 + 1) || (edge.from === j / 2 + 1 && edge.to === i + 1))) {
                    edges.push({ from: i + 1, to: j / 2 + 1 }); // Добавляем ребро в массив edges
                }
            }
        }
    }

    var options = {}; // Объект с опциями для графа

    var networkContainer = document.getElementById('mynetwork'); // Получаем контейнер графа
    var data = {
        nodes: nodes,
        edges: edges
    };
    var network = new vis.Network(networkContainer, data, options); // Создаем граф с помощью библиотеки vis.js
}