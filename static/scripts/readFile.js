// Функция для чтения содержимого файла с матрицей из элемента input
function readFile(inputContainer, count, color) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';

    // Обработчик события изменения файла
    fileInput.addEventListener('change', function () {
        const file = this.files[0];
        const reader = new FileReader();

        // Обработчик загрузки файла
        reader.onload = function (event) {
            const content = event.target.result;
            const rows = content.trim().split('\n');

            // Получение размера матрицы из длины первой строки файла
            const size = rows[0].trim().replace(/\s/g, '').length;

            const matrix = [];
            let error = false;

            // Парсинг строк из файла в матрицу
            rows.forEach((row, i) => {
                if (i >= size) return;

                const elements = row.trim().replace(/\s/g, '').split('');

                if (elements.length !== size) {
                    error = true;
                }

                // Преобразование значений в матрице к числовому формату
                const sanitizedRow = elements.map(el => el === '1' ? 1 : el === '0' ? 0 : null);

                if (sanitizedRow.includes(null)) {
                    error = true;
                }

                matrix.push(sanitizedRow);
            });

            // Проверка на ошибки в матрице
            if (error || matrix.length !== size) {
                alert('Ошибка: Матрица должна быть квадратной и содержать только 0 и 1!');
                return;
            }

            // Установка размера матрицы в соответствующий input
            const sizeInput = document.getElementById(count);
            sizeInput.value = size;
            addInputs1(inputContainer, count, color);

            // Заполнение входных полей матрицы значениями из файла
            matrix.forEach((row, i) => {
                row.forEach((value, j) => {
                    var input = document.getElementById(`dynamicInput${i}${j}${inputContainer}`);
                    input.value = value;
                    var input2 = document.getElementById(`dynamicInput${j}${i}${inputContainer}`);
                    input2.value = value;
                    if (i === j) {
                        input.value = '0';
                    }
                });
            });
        };

        // Чтение файла как текстового файла
        reader.readAsText(file);
    });

    // Эмуляция нажатия на элемент input для выбора файла
    fileInput.click();
}
