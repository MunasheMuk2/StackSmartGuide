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

    //Eurodimensions figure worked out by adding loading height to the pallet dims (120x80 & 120 x 100) and multipied by the number of pallets the users enters on the form so total mass can be calculated

    euroDimensions = Math.floor((parseInt(euroPallet) + parseInt(loadingHeightInput)) * palletNumberInput)
    industrialDimensions = parseInt(industrialPallet) + parseInt(loadingHeightInput)

    totalOutput.innerHTML = euroDimensions


    // Calculations for euro pallets - Dimensions limit set based on total for euroDimensions/industrialDimensions multiplied by the total pallets the vehicle can fit 


    // let smallVan;




    if (euroDimensions <= 9710 && palletsWeight <= 400 && palletNumberInput <= 1) {

        vehicle.innerHTML = "Small Van"
    }

    //Short Wheel Base

    if (euroDimensions <= 19460 && palletsWeight >= 401 && palletsWeight <= 1000) {

        vehicle.innerHTML = "Short Wheel Base"
    }


    //Long Wheel Base

    if (euroDimensions <= 29310 && palletsWeight >= 1001 && palletsWeight <= 1400) {

        vehicle.innerHTML = "Long Wheel Base"
    }

    //Sprinter van

    if (euroDimensions <= 39100 && palletsWeight >= 1001 && palletsWeight <= 1250) {

        vehicle.innerHTML = "Sprinter van"
    }


    //Luton van

    if (euroDimensions <= 39140 && palletsWeight >= 401 && palletsWeight <= 1000) {

        vehicle.innerHTML = "Luton van"
    }

    //7 & a half Tonne

    if (euroDimensions <= 98300 && palletsWeight >= 1401 && palletsWeight <= 3000) {

        vehicle.innerHTML = "7 & a half tonne truck"
    }

    //18 Tonne

    if (euroDimensions <= 137900 && palletsWeight >= 3001 && palletsWeight <= 9000) {

        vehicle.innerHTML = "18 Tonne"
    }

    //26 Tonne

    if (euroDimensions <= 137760 && palletsWeight >= 9001 && palletsWeight <= 15000) {

        vehicle.innerHTML = "26 Tonne"
    }

    //Artic

    if (euroDimensions <= 256620 && palletsWeight >= 15001 && palletsWeight <= 24000) {

        vehicle.innerHTML = "Artic"
    }

    //Megatrailer

    if (euroDimensions <= 257400 && palletsWeight >= 15001 && palletsWeight <= 24000) {

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