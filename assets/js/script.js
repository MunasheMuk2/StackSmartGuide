const calculateResult = document.getElementById("calculatePallet");
const totalOutput = document.getElementById('total');
const vehicle = document.getElementById('vanOutput');


calculateResult.addEventListener("click", calculateTotal)

function calculateTotal() {
    const palletNumberInput = document.getElementById('palletNumber').value;
    const loadingWeightInput = document.getElementById('loadingWeight').value;

    palletsWeight = palletNumberInput * loadingWeightInput

    const loadingHeightInput = document.getElementById('loadingHeight').value;
    const euroPallet = document.querySelector('#euro').value = 120 * 80;
    const industrialPallet = document.querySelector('#industrial').value = 120 * 100;

    euroDimensions = (parseInt(euroPallet) + parseInt(loadingHeightInput)) / parseInt(palletNumberInput)
    industrialDimensions = parseInt(industrialPallet) + parseInt(loadingHeightInput)

    totalOutput.innerHTML = euroDimensions


    // Calculations for euro pallets 


    // let smallVan;




    if (euroDimensions <= 9711 && palletsWeight <= 400) {

        vehicle.innerHTML = "Small Van"
    }

    //Short Wheel Base

    if (euroDimensions <= 9732 && palletsWeight >= 401 && palletsWeight <= 1000) {

        vehicle.innerHTML = "Short Wheel Base"
    }


    //Long Wheel Base

    if (euroDimensions <= 9773 && palletsWeight >= 1001 && palletsWeight <= 1400) {

        vehicle.innerHTML = "Long Wheel Base"
    }

    //Sprinter van

    if (euroDimensions <= 9779 && palletsWeight >= 1001 && palletsWeight <= 1250) {

        vehicle.innerHTML = "Sprinter van"
    }


    //Luton van

    if (euroDimensions >= 2446 && palletsWeight >= 401 && palletsWeight <= 1000) {

        vehicle.innerHTML = "Luton van"
    }

    //7 & a half Tonne

    if (euroDimensions <= 9840 && palletsWeight >= 1401 && palletsWeight <= 3000) {

        vehicle.innerHTML = "7 & a half tonne truck"
    }

    //18 Tonne

    if (euroDimensions <= 9864 && palletsWeight >= 3001 && palletsWeight <= 9000) {

        vehicle.innerHTML = "18 Tonne"
    }

    //26 Tonne

    if (euroDimensions <= 9854 && palletsWeight >= 9001 && palletsWeight <= 15000) {

        vehicle.innerHTML = "26 Tonne"
    }

    //Artic

    if (euroDimensions <= 9896 && palletsWeight >= 15001 && palletsWeight <= 24000) {

        vehicle.innerHTML = "Artic"
    }

    //Megatrailer

    if (euroDimensions <= 9926 && palletsWeight >= 15001 && palletsWeight <= 24000) {

        vehicle.innerHTML = "Megatrailer"
    }

    // Calculations for industrial pallets 
    // let smallVan;

    if (euroDimensions <= 12110 && palletsWeight <= 400) {

        vehicle.innerHTML = "Small Van"
    }

    //Short Wheel Base

    if (euroDimensions <= 12130 && palletsWeight >= 401 && palletsWeight <= 1000) {

        vehicle.innerHTML = "Short Wheel Base"
    }


    //Long Wheel Base

    if (euroDimensions <= 12170 && palletsWeight >= 1001 && palletsWeight <= 1400 && palletNumberInput <= 4) {

        vehicle.innerHTML = "Long Wheel Base"
    }

    //Sprinter van

    if (euroDimensions <= 12175 && palletsWeight >= 1001 && palletsWeight <= 1250) {

        vehicle.innerHTML = "Sprinter van"
    }

    //Luton van

    if (euroDimensions <= 12185 && palletsWeight >= 401 && palletsWeight <= 1000) {

        vehicle.innerHTML = "Luton van"
    }

    //7 & a half Tonne

    if (euroDimensions <= 12230 && palletsWeight >= 1401 && palletsWeight <= 3000) {

        vehicle.innerHTML = "7 & a half tonne truck"
    }

    //18 Tonne

    if (euroDimensions <= 12250 && palletsWeight >= 3001 && palletsWeight <= 9000) {

        vehicle.innerHTML = "18 Tonne"
    }

    //26 Tonne

    if (euroDimensions <= 12240 && palletsWeight >= 9001 && palletsWeight <= 15000) {

        vehicle.innerHTML = "26 Tonne"
    }

    //Artic

    if (euroDimensions <= 12270 && palletsWeight >= 15001 && palletsWeight <= 24000) {

        vehicle.innerHTML = "Artic"
    }

    //Megatrailer

    if (euroDimensions <= 12300 && palletsWeight >= 15001 && palletsWeight <= 24000) {

        vehicle.innerHTML = "Megatrailer"
    }

};



function refresh() {
    document.getElementById("palletCalculator").reset();

}