function solve_isomorphic_subgraphs_js() {

    const result_sub = document.getElementById('result_sub_div');
    result_sub.style.display = 'inline-block';
    result_sub.style.display = 'flex';
    result_sub.style.flexDirection = 'column';
    window.location.hash = "#result";

    const sizeInput1 = document.getElementById('inputCount1');
    const size1 = parseInt(sizeInput1.value);
    let matrix1 = [];

    const sizeInput2 = document.getElementById('inputCount2');
    const size2 = parseInt(sizeInput2.value);
    let matrix2 = [];

    if (size2 > size1) {
        alert('Размер подграфа должен быть меньше или равен исходному графу!');
    }

    // Собираем данные матрицы из input-полей для подграфа
    for (let i = 0; i < size1; i++) {
        matrix1[i] = [];
        for (let j = 0; j < size1; j++) {
            const input = document.getElementById(`dynamicInput${i}${j}inputContainer_first`);
            if (input.value !== '1') {
                input.value = '0';
            }
            matrix1[i][j] = parseInt(input.value);
        }
    }

    // Gather matrix data from input fields for the subgraph
    for (let i = 0; i < size2; i++) {
        matrix2[i] = [];
        for (let j = 0; j < size2; j++) {
            const input = document.getElementById(`dynamicInput${i}${j}inputContainer_second`);
            if (input.value !== '1') {
                input.value = '0';
            }
            matrix2[i][j] = parseInt(input.value);
        }
    }

    // Отправляем запрос на сервер с помощью функции fetch
    // Передаем ссылку на эндпоинт '/solve_isomorphic_subgraphs'
    // Указываем, что это POST-запрос
    fetch('/solve_isomorphic_subgraphs', {
        method: 'POST',
        headers: { // Устанавливаем заголовки запроса
            'Content-Type': 'application/json', // Указываем, что тип содержимого - JSON
        },
        body: JSON.stringify({ matrix1: matrix1, matrix2: matrix2 }),
        // Преобразуем данные в формат JSON и передаем их в теле запроса
    })
        .then(response => {
            // Если ответ от сервера успешен, возвращаем текст ответа
            if (response.ok) {
                return response.text();
            } else {
                // Если ответ от сервера не успешен, бросаем ошибку
                throw new Error('Error processing matrices');
            }
        })
        .then(data => {
            // Устанавливаем текст элемента с идентификатором 
            document.getElementById('result_sub').innerText = data;
        })
        .catch(error => {
            // Выводим ошибку в консоль
            console.error(error);
        });
}