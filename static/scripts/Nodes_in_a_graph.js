function Nodes_in_a_graph_js() {
    const sizeInput = document.getElementById('inputCount'); // Получаем элемент input для ввода размера
    const size = parseInt(sizeInput.value); // Получаем размер и преобразуем в число
    let matrix = []; // Объявляем массив для хранения матрицы
    let k = parseInt(document.getElementById('k').value); // Получаем значение 'k' и преобразуем в число

    for (let i = 0; i < size; i++) {
        matrix[i] = []; // Создаем вложенные массивы в матрице
        for (let j = 0; j < size; j++) {
            let input = document.getElementById(`dynamicInput${i}${j}inputContainer2`); // Получаем элемент input для ячейки
            if (input.value !== '1') { // Если значение не равно '1'
                input.value = '0'; // Устанавливаем значение '0'
            }
            matrix[i][j] = parseInt(input.value); // Преобразуем значение в числовой формат и добавляем в матрицу
        }
    }

    fetch('/Nodes_in_a_graph', { // Отправляем запрос на сервер
        method: 'POST', // Используем метод POST
        headers: {
            'Content-Type': 'application/json', // Устанавливаем заголовок Content-Type
        },
        body: JSON.stringify({ matrix: matrix, k: k }), // Отправляем данные в формате JSON
    })
        .then(response => {
            if (response.ok) { // Если ответ успешный
                return response.text(); // Возвращаем текст ответа
            } else {
                throw new Error('Ошибка обработки матрицы'); // Генерируем ошибку
            }
        })
        .then(data => {
            document.getElementById('rez').innerText = data; // Устанавливаем полученные данные в элемент с id 'rez'
        })
        .catch(error => {
            console.error(error); // Выводим ошибку в консоль
        });
}