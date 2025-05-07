
// const palletWeight = document.getElementById("palletWeight");
// const palletHeight = document.getElementById("palletHeight");
// const palletOne = document.getElementById("palletOne");
// const palletHTwo = document.getElementById("palletTwo");
// const recommendation = document.getElementById("recommendation");


function userChoice() {

    const palletAmount = document.getElementById('palletAmount');

    if (palletAmount = 1) {
        return 'Sprinter van required'
    } else {
        return 'Please refer to the guide for specific vehicle dimensions for your goods'
    }
};

function vehicleType() {
    vehicle.innerHTML = userChoice()
    console.log(userChoice())
}