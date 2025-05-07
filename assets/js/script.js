const calculateResult = document.getElementById('calculatePallet');
const palletNumberInput = document.getElementById('palletNumber');
const loadingHeightInput = document.getElementById('loadingHeight');
const loadingWeightInput = document.getElementById('loadingWeight');
const palletTypeinput = document.getElementById('palletType');

function calculateTotal() {
    const palletTypeValue = palletTypeinput.value;
    const palletValue = palletTypeValue * 100
    console.log(palletValue);
}




// function calculateTotal() {
//     const palletNumberValue = palletNumberInput.value;
//     const loadingHeightValue = loadingHeightInput.value;
//     const loadingWeightValue = loadingWeightInput.value;
//     const palletTypeValue = palletTypeinput.value;


// }

calculateResult.addEventListener('click', calculateTotal)