const numberDisplay = document.getElementById('numberOutput')
const plusButton = document.getElementById('plusButton')
const minusButton = document.getElementById('minusButton')
const inputField = document.querySelector('input')


value.numberDisplay.innerText = 0

inputField.value = 1

plusButton.addEventListener('click', () => {
    inputField.value = parseInt(inputField.value) + 1
    numberDisplay.innerText = inputField.value
    })
    
    minusButton.addEventListener('click', () => {
        inputField.value = parseInt(inputField.value) -1
        numberDisplay.innerText = inputField.value
    })

