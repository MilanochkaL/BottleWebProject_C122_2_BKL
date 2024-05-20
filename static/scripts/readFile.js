function readFile(inputContainer, count, color) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';

    fileInput.addEventListener('change', function () {
        const file = this.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            const content = event.target.result;
            const rows = content.trim().split('\n');

            // �������� ������ ������� �� ����� ������ ������ �����
            const size = rows[0].trim().replace(/\s/g, '').length;

            const matrix = [];
            let error = false;

            rows.forEach((row, i) => {
                if (i >= size) return;

                const elements = row.trim().replace(/\s/g, '').split('');

                if (elements.length !== size) {
                    error = true;
                }

                const sanitizedRow = elements.map(el => el === '1' ? 1 : el === '0' ? 0 : null);

                if (sanitizedRow.includes(null)) {
                    error = true;
                }

                matrix.push(sanitizedRow);
            });

            if (error || matrix.length !== size) {
                alert('������: ������� ������ ���� ���������� � ��������� ������ 0 � 1!');
                return;
            }

            const sizeInput = document.getElementById(count);
            sizeInput.value = size;
            addInputs1(inputContainer, count, color);
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

        reader.readAsText(file);
    });
    fileInput.click();
}

