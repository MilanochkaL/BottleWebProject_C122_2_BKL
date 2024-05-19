function addInputs1(inputContainer, count, color) {
    let numberOfInputs = parseInt(document.getElementById(count).value);
    if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 15) {
        alert('������� ���������� ����� �� 1 �� 15. � ��������� ������ ���-�� ����� ����� �� ���!');
        return;
    }

    let container = document.getElementById(inputContainer); // ��� ����� ��� ����� �����
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // ����������� ����� �� ������ ���������
    }

    const solveButton = document.getElementById('solveButton');
    solveButton.style.display = 'inline-block';

    let divNames = [];
    for (let j = 0; j < numberOfInputs; j++) {
        let divName = `div${j}${inputContainer}`;
        divNames.push(divName);

        let div = document.createElement('div');
        div.id = divName;
        div.style = "display: flex"
        container.appendChild(div); // ��������� ����� ���� � ���������

        let container2 = document.getElementById(divName); // ��� ����� ��� ����� �����
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
                    let input2 = document.getElementById(`dynamicInput${i}${j}`); // ��� ����� ��� ����� �����
                    input2.value = input.value;
                };
            }
            input.name = `dynamicInput${i}`; // ����� ��� ������� ���� ��� ��������� ������
            input.id = `dynamicInput${j}${i}${inputContainer}`;
            container2.appendChild(input); // ��������� ����� ���� � ���������
            container2.appendChild(document.createElement('br')); // ��������������� �������������� ������������ ����� ������
        }
    }
}

function generateMatrix(size, inputContainer) {
    let numberOfInputs = parseInt(document.getElementById(size).value);
    let matrix = generateSymmetricMatrix(numberOfInputs);
    fillMatrixInputs(matrix, 'dynamicInput', inputContainer);
}

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

function createGraph1(inputContainer, graph) {
    let container = document.getElementById(inputContainer);
    let matrixRows = container.children;
    let nodes = [];
    let edges = [];

    // �������� �����
    for (let i = 0; i < matrixRows.length; i++) {
        nodes.push({ id: i + 1, label: `Node ${i + 1}` });
    }

    // �������� �����
    for (let i = 0; i < matrixRows.length; i++) {
        let rowInputs = matrixRows[i].children;
        for (let j = i; j < rowInputs.length; j += 2) {
            let inputValue = rowInputs[j].value;
            if (inputValue == '1') {
                edges.push({ from: i + 1, to: j / 2 + 1 });
            }
        }
    }

    let networkContainer = document.getElementById(graph);
    let data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges)
    };
    let options = {};
    let network = new vis.Network(networkContainer, data, options);
}