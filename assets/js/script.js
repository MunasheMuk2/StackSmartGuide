const calculateResult = document.getElementById("calculatePallet");
const totalOutput = document.getElementById('total');
const vehicle = document.getElementById('vanOutput');


calculateResult.addEventListener("click", calculateTotal)

function calculateTotal() {
    const palletNumberInput = document.getElementById('palletNumber').value;
    const loadingWeightInput = document.getElementById('loadingWeight').value;

    palletsWeight = palletNumberInput * loadingWeightInput

    const length = 120;
    const width = 80;

    const vehicleLimits = {
        smallVan: {
            maxHeight: 110,
            maxWeight: 400,
            maxPallets: 2
        },
        shortWheelBase: {
            maxHeight: 130,
            maxWeight: 1000,
            maxPallets: 4
        },
        longWheelBase: {
            maxHeight: 170,
            maxWeight: 1400,
            maxPallets: 6
        },
        lutonVan: {
            maxHeight: 185,
            maxWeight: 1000,
            maxPallets: 8
        },
        sevenHalfTonne: {
            maxHeight: 230,
            maxWeight: 3000,
            maxPallets: 10
        },
        eighteenTonne: {
            maxHeight: 250,
            maxWeight: 9000,
            maxPallets: 14
        },
        twentySixTonne: {
            maxHeight: 240,
            maxWeight: 15000,
            maxPallets: 18
        },
        artic: {
            maxHeight: 270,
            maxWeight: 24000,
            maxPallets: 26
        },
        megatrailer: {
            maxHeight: 300,
            maxWeight: 24000,
            maxPallets: 30
        }
    };




    const palletHeightInput = document.getElementById('loadingHeight').value;
    const euroPallet = document.querySelector('#euro').value = length * width;
    const industrialPallet = document.querySelector('#industrial').value = 120 * 100;


    //Eurodimensions figure worked out by adding loading height to the pallet dims (120x80 & 120 x 100) and multipied by the number of pallets the users enters on the form so total mass can be calculated

    euroDimensions = Math.floor(parseInt(euroPallet) * parseInt(palletHeightInput))
    industrialDimensions = parseInt(industrialPallet) + parseInt(palletHeightInput);

    totalOutput.innerHTML = euroDimensions


    // Calculations for euro pallets - Dimensions limit set based on total for euroDimensions/industrialDimensions multiplied by the total pallets the vehicle can fit 

    // Pallet dimensions set between values to ensure the vehicle recommandation is based on the smallest vehicle that can take the goods
    // let smallVan;




    if (euroDimensions <= 1056000 && palletsWeight <= vehicleLimits.smallVan.maxWeight &&
        palletHeightInput <= vehicleLimits.smallVan.maxHeight &&
        palletNumberInput <= vehicleLimits.smallVan.maxPallets) {

        vehicle.innerHTML = "Small Van"
    }

    // //Short Wheel Base

    // if (euroDimensions <= 1248000 && palletsWeight <= 1000 && palletHeightInput <= vehicleHeights.shortWheelBase) {

    //     vehicle.innerHTML = "Short Wheel Base"
    // }


    // //Long Wheel Base

    // if (euroDimensions >= 1248001 && euroDimensions <= 1632000 && palletsWeight <= 1400 && palletHeightInput <= vehicleHeights.longWheelBase) {

    //     vehicle.innerHTML = "Long Wheel Base"
    // }

    // //Sprinter van

    // if (euroDimensions >= 1632001 && euroDimensions <= 1680000 && palletsWeight <= 1250 && palletHeightInput <= vehicleHeights.lutonVan) {

    //     vehicle.innerHTML = "Sprinter van"
    // }


    // //Luton van

    // if (euroDimensions >= 1680001 && euroDimensions <= 1776000 && palletsWeight <= 1000 && palletHeightInput <= vehicleHeights.lutonVan) {

    //     vehicle.innerHTML = "Luton van"
    // }

    // //7 & a half Tonne

    // if (euroDimensions >= 1776001 && euroDimensions <= 22080000 && palletHeightInput <= vehicleHeights.sevenHalfTonne) {

    //     vehicle.innerHTML = "7 & a half tonne truck"
    // }

    // //18 Tonne

    // if (euroDimensions >= 22080001 && euroDimensions <= 24000000 <= 137900 && palletsWeight >= 3001 && palletsWeight <= 9000 && palletHeightInput <= vehicleHeights.eighteenTonne) {

    //     vehicle.innerHTML = "18 Tonne"
    // }

    // //26 Tonne

    // if (euroDimensions >= 24000001 && euroDimensions <= 2304000 && palletsWeight >= 9001 && palletsWeight <= 15000 && palletHeightInput <= vehicleHeights.twentySixTonne) {

    //     vehicle.innerHTML = "26 Tonne"
    // }

    // //Artic

    // if (euroDimensions <= 2592000 && palletsWeight >= 15001 && palletsWeight <= 24000 && palletHeightInput <= vehicleHeights.artic) {

    //     vehicle.innerHTML = "Artic"
    // }

    // //Megatrailer

    // if (euroDimensions >= 2400000 && euroDimensions <= 2880000 && palletsWeight >= 15001 && palletsWeight <= 24000 && palletHeightInput <= vehicleHeights.megatrailer) {

    //     vehicle.innerHTML = "Megatrailer"
    // }

    // // Calculations for industrial pallets 
    // // let smallVan;

    // if (euroDimensions <= 12110 && palletsWeight <= 400) {

    //     vehicle.innerHTML = "Small Van"
    // }

    // //Short Wheel Base

    // if (euroDimensions <= 12130 && palletsWeight >= 401 && palletsWeight <= 1000) {

    //     vehicle.innerHTML = "Short Wheel Base"
    // }


    // //Long Wheel Base

    // if (euroDimensions <= 12170 && palletsWeight >= 1001 && palletsWeight <= 1400 && palletNumberInput <= 4) {

    //     vehicle.innerHTML = "Long Wheel Base"
    // }

    // //Sprinter van

    // if (euroDimensions <= 12175 && palletsWeight >= 1001 && palletsWeight <= 1250) {

    //     vehicle.innerHTML = "Sprinter van"
    // }

    // //Luton van

    // if (euroDimensions <= 12185 && palletsWeight >= 401 && palletsWeight <= 1000) {

    //     vehicle.innerHTML = "Luton van"
    // }

    // //7 & a half Tonne

    // if (euroDimensions <= 12230 && palletsWeight >= 1401 && palletsWeight <= 3000) {

    //     vehicle.innerHTML = "7 & a half tonne truck"
    // }

    // //18 Tonne

    // if (euroDimensions <= 12250 && palletsWeight >= 3001 && palletsWeight <= 9000) {

    //     vehicle.innerHTML = "18 Tonne"
    // }

    // //26 Tonne

    // if (euroDimensions <= 12240 && palletsWeight >= 9001 && palletsWeight <= 15000) {

    //     vehicle.innerHTML = "26 Tonne"
    // }

    // //Artic

    // if (euroDimensions <= 12270 && palletsWeight >= 15001 && palletsWeight <= 24000) {

    //     vehicle.innerHTML = "Artic"
    // }

    // //Megatrailer

    // if (euroDimensions <= 12300 && palletsWeight >= 15001 && palletsWeight <= 24000) {

    //     vehicle.innerHTML = "Megatrailer"
    // }

};



function refresh() {
    document.getElementById("palletCalculator").reset();

}