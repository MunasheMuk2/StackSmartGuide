const calculateResult = document.getElementById("calculatePallet");
const totalOutput = document.getElementById('total');
const vehicle = document.getElementById('vanOutput');

//Event listner added to calculate button as user inputs all details and clicks calculate to get recommended vehicle

calculateResult.addEventListener("click", calculateTotal)

function calculateTotal() {

    //Variables to retrieve elements from the pallet data html form and calculations from user inputs 

    const palletNumberInput = document.getElementById('palletNumber').value;
    const loadingWeightInput = document.getElementById('loadingWeight').value;
    const palletsWeight = palletNumberInput * loadingWeightInput

    const palletHeightInput = document.getElementById('loadingHeight').value;
    const euroPallet = document.querySelector('#euro').value = 120 * 80;
    const industrialPallet = document.querySelector('#industrial').value = 120 * 100;

    euroDimensions = Math.floor(parseInt(euroPallet) * parseInt(palletHeightInput))
    industrialDimensions = parseInt(industrialPallet) + parseInt(palletHeightInput);

    totalOutput.innerHTML = euroDimensions

    //Object to store vehicle height and weight capacity and also the total number of pallets that can be loaded if pallets are non stackable. 

    const vehicleLimits = {
        smallVan: {
            maxHeight: 110,
            maxWeight: 400,
            maxPallets: 1
        },
        shortWheelBase: {
            maxHeight: 130,
            maxWeight: 1000,
            maxPallets: 2
        },
        longWheelBase: {
            maxHeight: 170,
            maxWeight: 1400,
            maxPallets: 3
        },

        sprinterVan: {
            maxHeight: 175,
            maxWeight: 1250,
            maxPallets: 4
        },

        lutonVan: {
            maxHeight: 185,
            maxWeight: 1000,
            maxPallets: 4
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
            maxPallets: 14
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


    //Eurodimensions figure worked out by adding loading height to the pallet dims (120x80 & 120 x 100) and multipied by the number of pallets the users enters on the form so total mass can be calculated




    // Calculations for euro pallets - Dimensions limit set based on total for euroDimensions/industrialDimensions multiplied by the total pallets the vehicle can fit 

    // Pallet dimensions set between values to ensure the vehicle recommandation is based on the smallest vehicle that can take the goods
    // let smallVan;

    if (euroDimensions <= 1056000 && palletsWeight <= vehicleLimits.smallVan.maxWeight &&
        palletHeightInput <= vehicleLimits.smallVan.maxHeight &&
        palletNumberInput <= vehicleLimits.smallVan.maxPallets) {
        vehicle.innerHTML = "Small Van"
    } else if (euroDimensions <= 1248000 && palletsWeight <= vehicleLimits.shortWheelBase.maxWeight &&
        palletHeightInput <= vehicleLimits.shortWheelBase.maxHeight &&
        palletNumberInput <= vehicleLimits.shortWheelBase.maxPallets) {
        vehicle.innerHTML = "Short Wheel Base"
    } else if (euroDimensions <= 1248000 && palletsWeight <= vehicleLimits.shortWheelBase.maxWeight &&
        palletHeightInput <= vehicleLimits.shortWheelBase.maxHeight &&
        palletNumberInput <= vehicleLimits.shortWheelBase.maxPallets) {
        vehicle.innerHTML = "Short Wheel Base"
    } else if (euroDimensions <= 1248001 && palletsWeight <= vehicleLimits.longWheelBase.maxWeight &&
        palletHeightInput <= vehicleLimits.longWheelBase.maxHeight &&
        palletNumberInput <= vehicleLimits.longWheelBase.maxPallets) {
        vehicle.innerHTML = "Long Wheel Base"
    } else if (euroDimensions <= 1680000 && palletsWeight <= vehicleLimits.smallVan.maxWeight &&
        palletHeightInput <= vehicleLimits.smallVan.maxHeight &&
        palletNumberInput <= vehicleLimits.smallVan.maxPallets) {
        vehicle.innerHTML = "Sprinter van"
    } else if (euroDimensions <= 1776000 && palletsWeight <= vehicleLimits.lutonVan.maxWeight &&
        palletHeightInput <= vehicleLimits.lutonVan.maxHeight &&
        palletNumberInput <= vehicleLimits.lutonVan.maxPallets) {
        vehicle.innerHTML = "Luton van"
    } else if (euroDimensions <= 22080000 && palletsWeight <= vehicleLimits.sevenHalfTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.sevenHalfTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.sevenHalfTonne.maxPallets) {
        vehicle.innerHTML = "7 & a half tonne truck"
    } else if (euroDimensions <= 24000000 && palletsWeight <= vehicleLimits.eighteenTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.eighteenTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.eighteenTonne.maxPallets) {
        vehicle.innerHTML = "18 Tonne"
    } else if (euroDimensions >= 24000001 && euroDimensions <= 2304000 && palletsWeight <= vehicleLimits.twentySixTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.twentySixTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.twentySixTonne.maxPallets) {
        vehicle.innerHTML = "26 Tonne"
    } else if (euroDimensions <= 2592000 && palletsWeight <= vehicleLimits.artic.maxWeight &&
        palletHeightInput <= vehicleLimits.artic.maxHeight &&
        palletNumberInput <= vehicleLimits.artic.maxPallets) {
        vehicle.innerHTML = "Artic"
    } else if (euroDimensions >= 2400000 && euroDimensions <= 2880000 && palletsWeight <= vehicleLimits.megatrailer.maxWeight &&
        palletHeightInput <= vehicleLimits.megatrailer.maxHeight &&
        palletNumberInput <= vehicleLimits.megatrailer.maxPallets) {
        vehicle.innerHTML = "Megatrailer"
    }


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