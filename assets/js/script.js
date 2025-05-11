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

    totalOutput.innerHTML = industrialDimensions

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


    //If statements based on selection of Europallet and user inputs of weight etc - else if applied to ensure the vehicle recommandation is based on the smallest vehicle that can take the total goods


    if (euroDimensions <= 1056000 && palletsWeight <= vehicleLimits.smallVan.maxWeight &&
        palletHeightInput <= vehicleLimits.smallVan.maxHeight &&
        palletNumberInput <= vehicleLimits.smallVan.maxPallets) {
        vehicle.innerHTML = "Small Van"
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


    // Calculations for industrial pallets 

    if (industrialPallet <= 1320000 && palletsWeight <= vehicleLimits.smallVan.maxWeight &&
        palletHeightInput <= vehicleLimits.smallVan.maxHeight &&
        palletNumberInput <= vehicleLimits.smallVan.maxPallets) {
        vehicle.innerHTML = "Small Van"
    } else if (industrialPallet <= 1560000 && palletsWeight <= vehicleLimits.shortWheelBase.maxWeight &&
        palletHeightInput <= vehicleLimits.shortWheelBase.maxHeight &&
        palletNumberInput <= vehicleLimits.shortWheelBase.maxPallets) {
        vehicle.innerHTML = "Short Wheel Base"
    } else if (industrialPallet <= 2040000 && palletsWeight <= vehicleLimits.longWheelBase.maxWeight &&
        palletHeightInput <= vehicleLimits.longWheelBase.maxHeight &&
        palletNumberInput <= vehicleLimits.longWheelBase.maxPallets) {
        vehicle.innerHTML = "Long Wheel Base"
    } else if (industrialPallet <= 2100000 && palletsWeight <= vehicleLimits.smallVan.maxWeight &&
        palletHeightInput <= vehicleLimits.smallVan.maxHeight &&
        palletNumberInput <= vehicleLimits.smallVan.maxPallets) {
        vehicle.innerHTML = "Sprinter van"
    } else if (industrialPallet <= 2220000 && palletsWeight <= vehicleLimits.lutonVan.maxWeight &&
        palletHeightInput <= vehicleLimits.lutonVan.maxHeight &&
        palletNumberInput <= vehicleLimits.lutonVan.maxPallets) {
        vehicle.innerHTML = "Luton van"
    } else if (industrialPallet <= 2760000 && palletsWeight <= vehicleLimits.sevenHalfTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.sevenHalfTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.sevenHalfTonne.maxPallets) {
        vehicle.innerHTML = "7 & a half tonne truck"
    } else if (industrialPallet <= 3000000 && palletsWeight <= vehicleLimits.eighteenTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.eighteenTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.eighteenTonne.maxPallets) {
        vehicle.innerHTML = "18 Tonne"
    } else if (industrialPallet >= 3000001 && industrialPallet <= 2880000 && palletsWeight <= vehicleLimits.twentySixTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.twentySixTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.twentySixTonne.maxPallets) {
        vehicle.innerHTML = "26 Tonne"
    } else if (industrialPallet <= 3240000 && palletsWeight <= vehicleLimits.artic.maxWeight &&
        palletHeightInput <= vehicleLimits.artic.maxHeight &&
        palletNumberInput <= vehicleLimits.artic.maxPallets) {
        vehicle.innerHTML = "Artic"
    } else if (industrialPallet >= 2880000 && industrialPallet <= 3600000 && palletsWeight <= vehicleLimits.megatrailer.maxWeight &&
        palletHeightInput <= vehicleLimits.megatrailer.maxHeight &&
        palletNumberInput <= vehicleLimits.megatrailer.maxPallets) {
        vehicle.innerHTML = "Megatrailer"
    } else {
        vehicle.innerHTML = "No suitable vehicle found"
    }


};

const refreshBtn = document.getElementById('btnRefresh');

function refresh() {
    history.go(0);
}

refreshBtn.addEventListener('onclick', refresh);