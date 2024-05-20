function addGraph_3() {
    Euler_cycle_js();
    let container = document.getElementById('graph_div');
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    let div = document.createElement('div');
    div.id = "mynetwork";
    div.className = "mynetwork";
    container.appendChild(div);

    let inputContainer = document.getElementById('inputContainer2');
    let matrixRows = inputContainer.children;
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
            let inputValue = rowInputs[j].value; // �������� �������� �������� input
            if (inputValue === '1' && i !== j) { // ���� �������� ����� '1' � ��� �� ������������ �������
                // ���������, ��� ������ ����� ��� ��� � ������� edges
                if (!edges.some(edge => (edge.from === i + 1 && edge.to === j / 2 + 1) || (edge.from === j / 2 + 1 && edge.to === i + 1))) {
                    edges.push({ from: i + 1, to: j / 2 + 1 }); // ��������� ����� � ������ edges
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