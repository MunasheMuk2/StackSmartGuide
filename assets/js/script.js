const calculateResult = document.getElementById("calculatePallet");


// const palletNumberInput = document.getElementById('palletNumber').value;
// const loadingHeightInput = document.getElementById('loadingHeight').value;
// const loadingWeightInput = document.getElementById('loadingWeight').value;
// const palletTypeInput = document.querySelector('#palletType').options[0].selected = true;

function calculatePallets() {
    const palletNumberInput = document.getElementById('palletType').value;
    const loadingWeightInput = document.getElementById('loadingWeight').value;

    palletsWeight = palletNumberInput * loadingWeightInput

    const loadingHeightInput = document.getElementById('loadingHeight').value;
    const euroPallet = document.querySelector('#euro').value = 120 * 80;

    palletsDimensions = parseInt(euroPallet) * parseInt(loadingHeightInput)

    console.log(palletsDimensions)

}

function calculateTotal() {

};


calculateResult.addEventListener("click", calculateTotal)