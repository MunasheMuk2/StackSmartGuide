const calculateResult = document.getElementById("calculatePallet");


// const palletNumberInput = document.getElementById('palletNumber').value;
// const loadingHeightInput = document.getElementById('loadingHeight').value;
// const loadingWeightInput = document.getElementById('loadingWeight').value;
// const palletTypeInput = document.querySelector('#palletType').options[0].selected = true;

function calculatePallets() {
    const palletNumberInput = document.getElementById('palletNumber').value;
    const loadingWeightInput = document.getElementById('loadingWeight').value;

    palletsWeight = palletNumberInput * loadingWeightInput

    euroPallet = document.querySelector('#palletType').selectedOptions[0].value;
    const loadingHeightInput = document.getElementById('loadingHeight').value;

    palletsDimensions = parseInt(euroPallet) * parseInt(loadingHeightInput)

    console.log(euroPallet)

}

function calculateTotal() {

};


calculateResult.addEventListener("click", calculateTotal)