function addInputs() {
    let numberOfInputs = parseInt(document.getElementById('inputCount').value);
    if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 10) {
        alert('������� ���������� ����� �� 1 �� 10. � ��������� ������ ���-�� ����� ����� �� ���!');
        return;
    }

    let container = document.getElementById('inputContainer2'); // ��� ����� ��� ����� �����
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // ����������� ����� �� ������ ���������
    }

    let divNames = [];
    for (let j = 0; j < numberOfInputs; j++) {
        let divName = `div${j}`;
        divNames.push(divName);

        let div = document.createElement('div');
        div.id = divName;
        div.style = "display: flex"
        container.appendChild(div); // ��������� ����� ���� � ���������

        let container2 = document.getElementById(divName); // ��� ����� ��� ����� �����
        for (let i = 0; i < numberOfInputs; i++) {
            let input = document.createElement('input');
            input.style = "width: 30px; margin: 3px; border-radius: 10px; border-color: #90b0b6; border-width: 2px; border-style: solid;";
            input.name = `dynamicInput${i}`; // ����� ��� ������� ���� ��� ��������� ������
            container2.appendChild(input); // ��������� ����� ���� � ���������
            container2.appendChild(document.createElement('br')); // ��������������� �������������� ������������ ����� ������
        }
    }
}