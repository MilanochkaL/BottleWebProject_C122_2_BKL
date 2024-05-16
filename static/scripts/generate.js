function addInputs() {
    let numberOfInputs = parseInt(document.getElementById('inputCount').value);
    if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 10) {
        alert('¬ведите корректное число от 1 до 10. ¬ противном случае что-то может пойти не так!');
        return;
    }

    let container = document.getElementById('inputContainer2'); // Ёто место дл€ новых полей
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // ќсвобождаем место от старых элементов
    }

    let divNames = [];
    for (let j = 0; j < numberOfInputs; j++) {
        let divName = `div${j}`;
        divNames.push(divName);

        let div = document.createElement('div');
        div.id = divName;
        div.style = "display: flex"
        container.appendChild(div); // ƒобавл€ем новое поле в контейнер

        let container2 = document.getElementById(divName); // Ёто место дл€ новых полей
        for (let i = 0; i < numberOfInputs; i++) {
            let input = document.createElement('input');
            input.style = "width: 30px; margin: 3px; border-radius: 10px; border-color: #90b0b6; border-width: 2px; border-style: solid;";
            input.name = `dynamicInput${i}`; // »мена дл€ каждого пол€ дл€ избежани€ ошибок
            container2.appendChild(input); // ƒобавл€ем новое поле в контейнер
            container2.appendChild(document.createElement('br')); // ѕредусматриваем дополнительное пространство между пол€ми
        }
    }
}