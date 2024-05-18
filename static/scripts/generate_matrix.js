function generateMatrix(size) {
    let numberOfInputs = parseInt(document.getElementById(size).value);
    let matrix = generateSymmetricMatrix(numberOfInputs);
    fillMatrixInputs(matrix, 'dynamicInput');
}

function generateSymmetricMatrix(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            if (i == j) {
                row.push(0);
            }
            else if (i <= j) {
                row.push(Math.round(Math.random()));
            } else {
                row.push(matrix[j][i]);
            }
        }
        matrix.push(row);
    }
    return matrix;
}

function fillMatrixInputs(matrix, inputPrefix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let input = document.getElementById(`${ inputPrefix }${ i }${ j }`);
            input.value = matrix[i][j];
        }
    }
}
