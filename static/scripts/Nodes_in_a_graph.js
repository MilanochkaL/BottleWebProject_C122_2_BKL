function Nodes_in_a_graph_js() {
    const sizeInput = document.getElementById('inputCount');
    const size = parseInt(sizeInput.value);
    let matrix = [];
    let k = parseInt(document.getElementById('k').value);

    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            const input = document.getElementById(`dynamicInput${i}${j}inputContainer2`);
            matrix[i][j] = parseInt(input.value);
        }
    }

    fetch('/Nodes_in_a_graph', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ matrix: matrix, k:k}),
    })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Ошибка обработки матрицы');
            }
        })
        .then(data => {
            document.getElementById('rez').innerText = data;
        })
        .catch(error => {
            console.error(error);
        });
}
