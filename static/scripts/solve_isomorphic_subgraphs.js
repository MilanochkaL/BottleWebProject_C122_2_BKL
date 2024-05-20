function solve_isomorphic_subgraphs_js() {
    const sizeInput1 = document.getElementById('inputCount1');
    const size1 = parseInt(sizeInput1.value);
    let matrix1 = [];

    // Gather matrix data from input fields for the original graph
    for (let i = 0; i < size1; i++) {
        matrix1[i] = [];
        for (let j = 0; j < size1; j++) {
            const input = document.getElementById(`dynamicInput${i}${j}inputContainer_first`);
            matrix1[i][j] = parseInt(input.value);
        }
    }

    const sizeInput2 = document.getElementById('inputCount2');
    const size2 = parseInt(sizeInput2.value);
    let matrix2 = [];

    // Gather matrix data from input fields for the subgraph
    for (let i = 0; i < size2; i++) {
        matrix2[i] = [];
        for (let j = 0; j < size2; j++) {
            const input = document.getElementById(`dynamicInput${i}${j}inputContainer_second`);
            matrix2[i][j] = parseInt(input.value);
        }
    }

    fetch('/solve_isomorphic_subgraphs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ matrix1: matrix1, matrix2: matrix2 }),
    })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Error processing matrices');
            }
        })
        .then(data => {
            document.getElementById('result_sub').innerText = data;
        })
        .catch(error => {
            console.error(error);
        });
}