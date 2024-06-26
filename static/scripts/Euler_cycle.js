function Euler_cycle_js() {
    const sizeInput = document.getElementById('inputCount');
    const size = parseInt(sizeInput.value);
    let matrix = [];

    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            let input = document.getElementById(`dynamicInput${i}${j}inputContainer2`);
            if (input.value !== '1') {
                input.value = '0';
            }
            matrix[i][j] = parseInt(input.value);
        }
    }

    fetch('/Euler_cycle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ matrix: matrix }),
    })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('ошибка обработки матрицы');
            }
        })
        .then(data => {
            document.getElementById('rez').innerText = data;
        })
        .catch(error => {
            console.error(error);
        });
}