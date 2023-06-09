const container = document.getElementById('calculator-container');
const characters = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '.', '/'];
const screen = document.getElementById('screen');
const equals = document.getElementById('equals');

screen.addEventListener('keyup', () => {
    if (!/^[0-9]*$/.test(screen.value)) {
        screen.value = 0;
    }
});

const clear = () => {
    screen.value = '';
};

const display = (char) => {
    screen.value += char;
};

const result = () => {
    const isMath = screen.value;
    let evaluate = eval(isMath);
    if(evaluate === undefined){
        evaluate = '';
    }
    screen.value = evaluate;
    
};

const calculatorCharacters = () => {
    for (const char of characters) {
        const button = document.createElement('input');
        button.value = char;
        button.type = 'button';
        button.id = 'buttons';
        button.addEventListener('click', () => {
            display(char);
        });
        container.appendChild(button);
    }
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', clear);
};
calculatorCharacters();

equals.addEventListener('click', result);

const deleteIt = () => {
    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = '↩';
    deleteButton.id = 'delete';
    deleteButton.addEventListener('click', () => {
        screen.value = screen.value.slice(0, -1);
    });
    container.appendChild(deleteButton);
};
deleteIt();

