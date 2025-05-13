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

    //To change the calculation based on whether the user selects "euro" or "industrial"

    const palletType = document.getElementById("palletType").value;

    let palletLength = 120;
    let palletWidth = (palletType === "euro") ? 80 : 100;

    const palletHeightInput = document.getElementById('loadingHeight').value;
    const euroPallet = document.querySelector('#euro').value = palletLength * palletWidth
    const industrialPallet = document.querySelector('#industrial').value = palletLength * palletWidth

    //Works out full pallet dimensions

    euroDimensions = Math.floor(parseInt(euroPallet) * parseInt(palletHeightInput))
    industrialDimensions = parseInt(industrialPallet) * parseInt(palletHeightInput);

    // totalOutput.innerHTML = industrialDimensions


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


    // Output result
    //If statements based on selection of Europallet and user inputs of weight etc - else if applied to ensure the vehicle recommandation is based on the smallest vehicle that can take the total goods


    if (palletType === "euro" && euroDimensions <= 1056000 && palletsWeight <= vehicleLimits.smallVan.maxWeight &&
        palletHeightInput <= vehicleLimits.smallVan.maxHeight &&
        palletNumberInput <= vehicleLimits.smallVan.maxPallets) {
        vehicle.innerHTML = "Small van - 100 x  120 x 110 cm "
    } else if (palletType === "industrial" && industrialDimensions <= 1320000 && palletsWeight <= vehicleLimits.smallVan.maxWeight &&
        palletHeightInput <= vehicleLimits.smallVan.maxHeight &&
        palletNumberInput <= vehicleLimits.smallVan.maxPallets) {
        vehicle.innerHTML = "Small van - 100 x  120 x 110 cm "
    } else if (palletType === "euro" && euroDimensions <= 1248000 && palletsWeight <= vehicleLimits.shortWheelBase.maxWeight &&
        palletHeightInput <= vehicleLimits.shortWheelBase.maxHeight &&
        palletNumberInput <= vehicleLimits.shortWheelBase.maxPallets) {
        vehicle.innerHTML = "Short Wheel Base - 200 x 120 x 130cm "
    } else if (palletType === "industrial" && industrialDimensions <= 1560000 && palletsWeight <= vehicleLimits.shortWheelBase.maxWeight &&
        palletHeightInput <= vehicleLimits.shortWheelBase.maxHeight &&
        palletNumberInput <= vehicleLimits.shortWheelBase.maxPallets) {
        vehicle.innerHTML = "Short Wheel Base - 200 x 120 x 130cm "
    } else if (palletType === "euro" && euroDimensions <= 1248001 && palletsWeight <= vehicleLimits.longWheelBase.maxWeight &&
        palletHeightInput <= vehicleLimits.longWheelBase.maxHeight &&
        palletNumberInput <= vehicleLimits.longWheelBase.maxPallets) {
        vehicle.innerHTML = "Long Wheel Base - 300 x 120 x 170cm"
    } else if (palletType === "industrial" && industrialDimensions <= 2040000 && palletsWeight <= vehicleLimits.longWheelBase.maxWeight &&
        palletHeightInput <= vehicleLimits.longWheelBase.maxHeight &&
        palletNumberInput <= vehicleLimits.longWheelBase.maxPallets) {
        vehicle.innerHTML = "Long Wheel Base - 300 x 120 x 170cm"
    } else if (palletType === "euro" && euroDimensions <= 1680000 && palletsWeight <= vehicleLimits.smallVan.maxWeight &&
        palletHeightInput <= vehicleLimits.smallVan.maxHeight &&
        palletNumberInput <= vehicleLimits.smallVan.maxPallets) {
        vehicle.innerHTML = "Sprinter van - 420 x 125 x 175cm"
    } else if (palletType === "industrial" && industrialDimensions <= 2100000 && palletsWeight <= vehicleLimits.smallVan.maxWeight &&
        palletHeightInput <= vehicleLimits.smallVan.maxHeight &&
        palletNumberInput <= vehicleLimits.smallVan.maxPallets) {
        vehicle.innerHTML = "Sprinter van - 420 x 125 x 175cm"
    } else if (palletType === "euro" && euroDimensions <= 1776000 && palletsWeight <= vehicleLimits.lutonVan.maxWeight &&
        palletHeightInput <= vehicleLimits.lutonVan.maxHeight &&
        palletNumberInput <= vehicleLimits.lutonVan.maxPallets) {
        vehicle.innerHTML = "Luton van - 400 x 200 x 185cm"
    } else if (palletType === "industrial" && industrialDimensions <= 2220000 && palletsWeight <= vehicleLimits.lutonVan.maxWeight &&
        palletHeightInput <= vehicleLimits.lutonVan.maxHeight &&
        palletNumberInput <= vehicleLimits.lutonVan.maxPallets) {
        vehicle.innerHTML = "Luton van - 400 x 200 x 185cm"
    } else if (palletType === "euro" && euroDimensions <= 22080000 && palletsWeight <= vehicleLimits.sevenHalfTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.sevenHalfTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.sevenHalfTonne.maxPallets) {
        vehicle.innerHTML = "7 & a half tonne truck - 600 x 230 x 230cm"
    } else if (palletType === "industrial" && industrialDimensions <= 2760000 && palletsWeight <= vehicleLimits.sevenHalfTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.sevenHalfTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.sevenHalfTonne.maxPallets) {
        vehicle.innerHTML = "7 & a half tonne truck - 600 x 230 x 230cm"
    } else if (palletType === "euro" && euroDimensions <= 24000000 && palletsWeight <= vehicleLimits.eighteenTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.eighteenTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.eighteenTonne.maxPallets) {
        vehicle.innerHTML = "18 Tonne - 730 x 240 x 250cm"
    } else if (palletType === "industrial" && industrialDimensions <= 3000000 && palletsWeight <= vehicleLimits.eighteenTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.eighteenTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.eighteenTonne.maxPallets) {
        vehicle.innerHTML = "18 Tonne - 730 x 240 x 250cm"
    } else if (palletType === "euro" && euroDimensions >= 24000001 && euroDimensions <= 2304000 && palletsWeight <= vehicleLimits.twentySixTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.twentySixTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.twentySixTonne.maxPallets) {
        vehicle.innerHTML = "26 Tonne - 730 x 240 x 240cm"
    } else if (palletType === "industrial" && industrialDimensions >= 3000001 && industrialDimensions <= 2880000 && palletsWeight <= vehicleLimits.twentySixTonne.maxWeight &&
        palletHeightInput <= vehicleLimits.twentySixTonne.maxHeight &&
        palletNumberInput <= vehicleLimits.twentySixTonne.maxPallets) {
        vehicle.innerHTML = "26 Tonne - 730 x 240 x 240cm"
    } else if (palletType === "euro" && euroDimensions <= 2592000 && palletsWeight <= vehicleLimits.artic.maxWeight &&
        palletHeightInput <= vehicleLimits.artic.maxHeight &&
        palletNumberInput <= vehicleLimits.artic.maxPallets) {
        vehicle.innerHTML = "Artic - 1350 x 240 x 270cm"
    } else if (palletType === "industrial" && industrialDimensions <= 3240000 && palletsWeight <= vehicleLimits.artic.maxWeight &&
        palletHeightInput <= vehicleLimits.artic.maxHeight &&
        palletNumberInput <= vehicleLimits.artic.maxPallets) {
        vehicle.innerHTML = "Artic - 1350 x 240 x 270cm"
    } else if (palletType === "euro" && euroDimensions >= 2400000 && euroDimensions <= 2880000 && palletsWeight <= vehicleLimits.megatrailer.maxWeight &&
        palletHeightInput <= vehicleLimits.megatrailer.maxHeight &&
        palletNumberInput <= vehicleLimits.megatrailer.maxPallets) {
        vehicle.innerHTML = "Megatrailer - 1350 x 240 x 300cm "
    } else if (palletType === "industrial" && industrialDimensions >= 2880000 && industrialDimensions <= 3600000 && palletsWeight <= vehicleLimits.megatrailer.maxWeight &&
        palletHeightInput <= vehicleLimits.megatrailer.maxHeight &&
        palletNumberInput <= vehicleLimits.megatrailer.maxPallets) {
        vehicle.innerHTML = "Megatrailer - 1350 x 240 x 300cm "
    } else {
        vehicle.innerHTML = "No suitable vehicle found"
    }

};

//Code inside onclick function from stack overflow - to reset the page once the reset button is clicked 

function resetForm() {
    // Add reset functionality here
    window.location.reload();
}