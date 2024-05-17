
function addInputs() {
    let numberOfInputs = parseInt(document.getElementById('inputCount').value);
    if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 15) {
        alert('Введите корректное число от 1 до 15. В противном случае что-то может пойти не так!');
        return;
    }

    let container = document.getElementById('inputContainer2'); // Это место для новых полей
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // Освобождаем место от старых элементов
    }

    let divNames = [];
    for (let j = 0; j < numberOfInputs; j++) {
        let divName = `div${j}`;
        divNames.push(divName);

        let div = document.createElement('div');
        div.id = divName;
        div.style = "display: flex"
        container.appendChild(div); // Добавляем новое поле в контейнер

        let container2 = document.getElementById(divName); // Это место для новых полей
        for (let i = 0; i < numberOfInputs; i++) {
            let input = document.createElement('input');
            input.style = "width: 30px; margin: 3px; border-radius: 10px; border-color: #90b0b6; border-width: 2px; border-style: solid;";
            input.name = `dynamicInput${i}`; // Имена для каждого поля для избежания ошибок
            container2.appendChild(input); // Добавляем новое поле в контейнер
            container2.appendChild(document.createElement('br')); // Предусматриваем дополнительное пространство между полями
        }
    }
}

function createGraph() {
    let container = document.getElementById('inputContainer2');
    let matrixRows = container.children;
    let nodes = [];
    let edges = [];

    // Создание узлов
    for (let i = 0; i < matrixRows.length; i++) {
        nodes.push({ id: i + 1, label: `Node ${i + 1}` });
    }

    // Создание ребер
    for (let i = 0; i < matrixRows.length; i++) {
        let rowInputs = matrixRows[i].children;
        for (let j = i; j < rowInputs.length; j += 2) {
            let inputValue = rowInputs[j].value;
            if (inputValue == '1') {
                edges.push({ from: i + 1, to: j / 2 + 1 });
            }
        }
    }

    let networkContainer = document.getElementById('mynetwork');
    let data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges)
    };
    let options = {};
    let network = new vis.Network(networkContainer, data, options);
}