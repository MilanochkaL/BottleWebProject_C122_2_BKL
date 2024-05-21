function addGraph_3(num) {
    if (num === '3') {
        Euler_cycle_js();
    }
    if (num === '2') {
        Nodes_in_a_graph_js();
    }

    let container = document.getElementById('graph_div');
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    // Создание нового элемента div для отображения сетевого графа
    let div = document.createElement('div');
    div.id = "mynetwork";
    div.className = "mynetwork";
    container.appendChild(div);

    // Получаем контейнер с входными данными для матрицы смежности
    let inputContainer = document.getElementById('inputContainer2');
    let matrixRows = inputContainer.children;
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

    var options = {};

    var networkContainer = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var network = new vis.Network(networkContainer, data, options);
}
