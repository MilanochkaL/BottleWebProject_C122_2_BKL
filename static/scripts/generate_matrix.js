function generateMatrix(size) {
    // Получаем количество входов из элемента с указанным size
    let numberOfInputs = parseInt(document.getElementById(size).value);
    // Генерируем симметричную матрицу заданного размера
    let matrix = generateSymmetricMatrix(numberOfInputs);
    // Заполняем поля ввода значениями из матрицы
    fillMatrixInputs(matrix, 'dynamicInput');
}

function generateSymmetricMatrix(size) {
    // Создаем пустую матрицу
    let matrix = [];
    // Заполняем матрицу
    for (let i = 0; i < size; i++) {
        // Создаем новую строку матрицы
        let row = [];
        for (let j = 0; j < size; j++) {
            // Заполняем диагональные элементы нулями
            if (i == j) {
                row.push(0);
            }
            // Заполняем верхнюю треугольную часть случайными значениями
            else if (i <= j) {
                row.push(Math.round(Math.random()));
            }
            // Заполняем нижнюю треугольную часть значениями из верхней части
            else {
                row.push(matrix[j][i]);
            }
        }
        // Добавляем заполненную строку в матрицу
        matrix.push(row);
    }
    // Возвращаем сгенерированную матрицу
    return matrix;
}

function fillMatrixInputs(matrix, inputPrefix) {
    // Проходим по всем элементам матрицы
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // Получаем элемент ввода по его ID
            let input = document.getElementById(`${inputPrefix}${i}${j}`);
            // Заполняем значением из матрицы
            input.value = matrix[i][j];
        }
    }
}