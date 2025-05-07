const calculateResult = document.getElementById('calculatePallet');
const palletNumberInput = document.getElementById('palletNumber');
const loadingHeightInput = document.getElementById('loadingHeight');
const loadingWeightInput = document.getElementById('loadingWeight');
const euroPalletinput = document.getElementById('euroPallet');



function calculateTotal() {
    const palletNumberValue = palletNumberInput.value;
    const loadingHeightValue = loadingHeightInput.value;
    const loadingWeightValue = loadingWeightInput.value;
    const euroPalletValue = euroPalletinput.value;
    console.log(euroPalletValue);
}

calculateResult.addEventListener('click', calculateTotal)