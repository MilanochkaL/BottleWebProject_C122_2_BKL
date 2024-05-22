// Функция для чтения содержимого файла с матрицей из элемента input
function readFile(inputContainer, count, color) {
    const fileInput = document.createElement('input'); // Создание элемента input
    fileInput.type = 'file'; // Установка типа файла для input
    fileInput.accept = '.txt'; // Установка фильтра для выбора только .txt файлов

    // Обработчик события изменения файла
    fileInput.addEventListener('change', function () {
        const file = this.files[0]; // Получение выбранного файла
        const reader = new FileReader(); // Создание объекта FileReader

        // Обработчик загрузки файла
        reader.onload = function (event) {
            const content = event.target.result; // Получение содержимого файла
            const rows = content.trim().split('\n'); // Разделение содержимого на строки

            // Получение размера матрицы из длины первой строки файла
            const size = rows[0].trim().replace(/\s/g, '').length; // Определение размера матрицы

            const matrix = []; // Инициализация матрицы
            let error = false; // Установка флага ошибок в false

            // Парсинг строк из файла в матрицу
            rows.forEach((row, i) => {
                if (i >= size) return; // Пропуск лишних строк

                const elements = row.trim().replace(/\s/g, '').split(''); // Разделение строки на элементы

                if (elements.length !== size) {
                    error = true; // Пометка ошибки, если размер строки не соответствует размеру матрицы
                }

                // Преобразование значений в матрице в числовой формат
                const sanitizedRow = elements.map(el => el === '1' ? 1 : el === '0' ? 0 : null);

                if (sanitizedRow.includes(null)) {
                    error = true; // Пометка ошибки, если встречены недопустимые значения
                }

                matrix.push(sanitizedRow); // Добавление строки в матрицу
            });

            // Проверка на ошибки в матрице
            if (error || matrix.length !== size) {
                alert('Ошибка: Матрица должна быть квадратной и содержать только 0 и 1!'); // Вывод сообщения об ошибке
                return; // Выход из функции при ошибке
            }

            // Установка размера матрицы в соответствующий input
            const sizeInput = document.getElementById(count);
            sizeInput.value = size;
            addInputs1(inputContainer, count, color); // Вызов функции addInputs1

            // Заполнение входных полей матрицы значениями из файла
            matrix.forEach((row, i) => {
                row.forEach((value, j) => {
                    var input = document.getElementById(`dynamicInput${i}${j}${inputContainer}`);
                    input.value = value;
                    var input2 = document.getElementById(`dynamicInput${j}${i}${inputContainer}`);
                    input2.value = value;
                    if (i === j) {
                        input.value = '0'; // Установка '0' на диагонали матрицы
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