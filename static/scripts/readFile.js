function readFile(inputContainer, count, color) {
    const fileInput = document.createElement('input'); // Создаем новый элемент input
    fileInput.type = 'file'; // Устанавливаем тип файла для input
    fileInput.accept = '.txt'; // Устанавливаем фильтр для выбора только текстовых файлов

    fileInput.addEventListener('change', function () { // Добавляем слушатель события изменения в input
        const file = this.files[0]; // Получаем выбранный файл
        const reader = new FileReader(); // Создаем объект FileReader

        reader.onload = function (event) { // Событие загрузки файла
            const content = event.target.result; // Получаем содержимое файла
            const rows = content.trim().split('\n'); // Разделяем содержимое файла на строки

            // Получаем размер матрицы по длине первой строки файла
            const size = rows[0].trim().replace(/\s/g, '').length; // Определяем размер матрицы

            const matrix = []; // Инициализируем матрицу
            let error = false; // Устанавливаем флаг ошибки в false

            rows.forEach((row, i) => { // Перебираем строки файла
                if (i >= size) return; // Если строк больше размера, пропускаем

                const elements = row.trim().replace(/\s/g, '').split(''); // Разделяем элементы строки

                if (elements.length !== size) { // Проверка на соответствие размера
                    error = true; // Устанавливаем флаг ошибки
                }

                const sanitizedRow = elements.map(el => el === '1' ? 1 : el === '0' ? 0 : null); // Преобразуем элементы строки в числа

                if (sanitizedRow.includes(null)) { // Проверяем наличие нулевых значений
                    error = true; // Устанавливаем флаг ошибки
                }

                matrix.push(sanitizedRow); // Добавляем строку в матрицу
            });

            if (error || matrix.length !== size) { // Проверяем наличие ошибок в матрице
                alert('Ошибка: Матрица должна быть квадратной и содержать только 0 и 1!'); // Выводим сообщение об ошибке
                return; // Завершаем функцию
            }

            const sizeInput = document.getElementById(count); // Получаем элемент по идентификатору count
            sizeInput.value = size; // Устанавливаем значение в поле размера

            addInputs1(inputContainer, count, color); // Вызываем функцию addInputs1

            matrix.forEach((row, i) => { // Перебираем строки и столбцы матрицы
                row.forEach((value, j) => {
                    var input = document.getElementById(`dynamicInput${i}${j}${inputContainer}`); // Получаем элемент input по идентификатору
                    input.value = value; // Устанавливаем значение элемента

                    var input = document.getElementById(`dynamicInput${j}${i}${inputContainer}`); // Получаем элемент input по идентификатору
                    input.value = value; // Устанавливаем значение элемента
                });
            });
        };

        reader.readAsText(file); // Читаем содержимое файла как текст
    });

    fileInput.click(); // Программно нажимаем на элемент input для выбора файла
}