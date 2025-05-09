const calculateResult = document.getElementById("calculatePallet");
const totalOutput = document.getElementById('total');
const vehicle = document.getElementById('vanOutput');



// const palletNumberInput = document.getElementById('palletNumber').value;
// const loadingHeightInput = document.getElementById('loadingHeight').value;
// const loadingWeightInput = document.getElementById('loadingWeight').value;
// const palletTypeInput = document.querySelector('#palletType').options[0].selected = true;

function calculatePallets() {
    // const palletNumberInput = document.getElementById('palletNumber').value;
    // const loadingWeightInput = document.getElementById('loadingWeight').value;

    // palletsWeight = palletNumberInput * loadingWeightInput

    // const loadingHeightInput = document.getElementById('loadingHeight').value;
    // const euroPallet = document.querySelector('#euro').value = 120 * 80;
    // const industrialPallet = document.querySelector('#industrial').value = 120 * 100;

    // euroDimensions = parseInt(euroPallet) + parseInt(loadingHeightInput)
    // industrialDimensions = parseInt(industrialPallet) + parseInt(loadingHeightInput)

    // console.log(palletsWeight)

}

calculateResult.addEventListener("click", calculateTotal)

function calculateTotal() {
    const palletNumberInput = document.getElementById('palletNumber').value;
    const loadingWeightInput = document.getElementById('loadingWeight').value;

    palletsWeight = palletNumberInput * loadingWeightInput

    const loadingHeightInput = document.getElementById('loadingHeight').value;
    const euroPallet = document.querySelector('#euro').value = 120 * 80;
    const industrialPallet = document.querySelector('#industrial').value = 120 * 100;

    euroDimensions = parseInt(euroPallet) + parseInt(loadingHeightInput)
    industrialDimensions = parseInt(industrialPallet) + parseInt(loadingHeightInput)

    totalOutput.innerHTML = euroDimensions



    // let smallVan;

    if (euroDimensions <= 9710 && palletsWeight <= 400) {

        vehicle.innerHTML = "Small Van"
    }


};






function refresh() {
    document.getElementById("palletCalculator").reset();

}