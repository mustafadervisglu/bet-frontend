const dropdown = document.getElementsByClassName("dropdown-btn");
const slider = document.getElementById("myRange");
const output = document.getElementById("value");
const infoNumber = document.getElementById("infoNumber");
const payout = document.getElementById("payout");
const change = document.getElementById("change");
const winAmountOutput = document.getElementById("detailAmount");
const betAmount = document.getElementById("amountInput")





output.innerHTML = slider.value;
infoNumber.innerHTML = slider.value;
change.innerHTML = slider.value + "%";
payout.innerHTML = String((98.1 / slider.value).toFixed(3)) + "x";
winAmountOutput.innerHTML = String((98.1 / slider.value).toFixed(3) * betAmount.value )

slider.oninput = function () {

    output.innerHTML = slider.value;
    infoNumber.innerHTML = slider.value;
    change.innerHTML = slider.value + "%";
    winAmountOutput.innerHTML = String((98.1 / slider.value).toFixed(3) * betAmount.value )

    if (slider.value === "1") {
        payout.innerHTML = String((98.1 / slider.value)) + "x";
    } else {
        payout.innerHTML = String((98.1 / slider.value).toFixed(3)) + "x";

    }


};

slider.addEventListener("mousemove", function () {

    const x = slider.value;
    slider.style.background = "linear-gradient(90deg, rgb(0,243,142)" + x + "% , rgb(255,0,0)" + x + "%)";

});


function displayBlock() {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", displayBlock);
}



