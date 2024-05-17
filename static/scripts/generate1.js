
function addInputs() {
    let numberOfInputs = parseInt(document.getElementById('inputCount').value);
    if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 15) {
        alert('������� ���������� ����� �� 1 �� 15. � ��������� ������ ���-�� ����� ����� �� ���!');
        return;
    }

    let container = document.getElementById('inputContainer2'); // ��� ����� ��� ����� �����
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // ����������� ����� �� ������ ���������
    }

    let divNames = [];
    for (let j = 0; j < numberOfInputs; j++) {
        let divName = `div${j}`;
        divNames.push(divName);

        let div = document.createElement('div');
        div.id = divName;
        div.style = "display: flex"
        container.appendChild(div); // ��������� ����� ���� � ���������

        let container2 = document.getElementById(divName); // ��� ����� ��� ����� �����
        for (let i = 0; i < numberOfInputs; i++) {
            let input = document.createElement('input');
            input.style = "width: 30px; margin: 3px; border-radius: 10px; border-color: #90b0b6; border-width: 2px; border-style: solid;";
            input.name = `dynamicInput${i}`; // ����� ��� ������� ���� ��� ��������� ������
            container2.appendChild(input); // ��������� ����� ���� � ���������
            container2.appendChild(document.createElement('br')); // ��������������� �������������� ������������ ����� ������
        }
    }
}

function createGraph() {
    let container = document.getElementById('inputContainer2');
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

    let networkContainer = document.getElementById('mynetwork');
    let data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges)
    };
    let options = {};
    let network = new vis.Network(networkContainer, data, options);
}