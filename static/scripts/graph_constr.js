function addGraph1() {
    let container = document.getElementById('graph_div1');
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    let div = document.createElement('div');
    div.id = "mynetwork";
    div.className = "mynetwork";
    container.appendChild(div);

    let inputContainer = document.getElementById('inputContainer');
    let matrixRows = inputContainer.children;
    let nodes = [];
    let edges = [];

    // Create nodes
    for (let i = 0; i < matrixRows.length; i++) {
        nodes.push({ id: i + 1, label: `${i + 1}` });
    }

    // Create edges
    for (let i = 0; i < matrixRows.length; i++) {
        let rowInputs = matrixRows[i].children;
        for (let j = i; j < rowInputs.length; j += 2) {
            let inputValue = rowInputs[j].value;
            if (inputValue === '1') {
                edges.push({ from: i + 1, to: j / 2 + 1 });
            }
        }
    }

    // Network options
    var options = {};

    // Create network data and display the graph
    var networkContainer = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var network = new vis.Network(networkContainer, data, options);
}
