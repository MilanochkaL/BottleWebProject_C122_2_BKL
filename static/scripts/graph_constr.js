function addGraph1() {
    let container = document.getElementById('graph_div1'); // Получаем элемент с id 'graph_div1'
    while (container.hasChildNodes()) { // Пока в контейнере есть дочерние элементы
        container.removeChild(container.lastChild); // Удаляем последний дочерний элемент
    }
    let div = document.createElement('div'); // Создаем новый div
    div.id = "mynetwork_1"; // Устанавливаем id для div
    div.className = "mynetwork_1"; // Устанавливаем класс для div
    container.appendChild(div); // Добавляем div в контейнер

    let inputContainer = document.getElementById('inputContainer'); // Получаем элемент с id 'inputContainer'
    let matrixRows = inputContainer.children; // Получаем дочерние элементы контейнера
    let nodes = []; // Инициализируем массив для узлов
    let edges = []; // Инициализируем массив для ребер

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

    // Опции для сети
    var options = {};

    // Создание данных сети и отображение графа
    var networkContainer = document.getElementById('mynetwork_1'); // Получаем элемент для отображения графа
    var data = {
        nodes: nodes, // Узлы
        edges: edges // Ребра
    };
    var network = new vis.Network(networkContainer, data, options); // Создаем и отображаем граф
}