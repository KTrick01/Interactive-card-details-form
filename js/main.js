const cardName = document.querySelector(".card-name");
const nameInput = document.querySelector("#name");

const cardNumber = document.querySelector(".card-number")
const numberInput = document.querySelector("#number")

const cardDateMM = document.querySelector(".card-dateMM");
const dateMMInput = document.querySelector("#dateMM");

const cardDateYY = document.querySelector(".card-dateYY");
const dateYYInput = document.querySelector("#dateYY");

const cardCVC = document.querySelector(".card-cvc")
const cvcInput = document.querySelector("#cvc")

const warningNumber = document.querySelector(".warning-number")
const warningName = document.querySelector(".warning-name")
const warningDate = document.querySelector(".warning-date")
const warningCVC = document.querySelector(".warning-cvc")
const btn = document.querySelector(".btn")

var good = 1;

nameInput.addEventListener('keyup', function (e) {
    if (e.key == "Backspace") {
        if (nameInput.value === "") {
            cardName.textContent = "Jane Appleseed"
        }
    }

})

nameInput.addEventListener('input', function (e) {

    cardName.textContent = nameInput.value

})

numberInput.addEventListener('keyup', function (e) {
    if (e.key == "Backspace") {
        if (numberInput.value === "") {
            cardNumber.textContent = "0000 0000 0000 0000"
        }
    }

})

numberInput.addEventListener('input', function (e) {

    e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();

    cardNumber.textContent = numberInput.value


});

dateMMInput.addEventListener('keyup', function (e) {
    if (e.key == "Backspace") {
        if (dateMMInput.value === "") {
            cardDateMM.textContent = "00"
        }
    }

})

dateMMInput.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();

    cardDateMM.textContent = dateMMInput.value


});

dateYYInput.addEventListener('keyup', function (e) {
    if (e.key == "Backspace") {
        if (dateYYInput.value === "") {
            cardDateYY.textContent = "00"
        }
    }

})

dateYYInput.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();

    cardDateYY.textContent = dateYYInput.value


});

cvcInput.addEventListener('keyup', function (e) {
    if (e.key == "Backspace") {
        if (cvcInput.value === "") {
            cardCVC.textContent = "000"
        }
    }

})

cvcInput.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();

    cardCVC.textContent = cvcInput.value


});

btn.addEventListener('click', function () {



    if (numberInput.value === "") {

        warningNumber.classList.remove("none")
        numberInput.style.outline = "3px solid red"



    } else if (numberInput.value.length !== 19) {

        warningNumber.textContent = "Not a valid number"
        warningNumber.classList.remove("none")
        numberInput.style.outline = "3px solid red"


    } else {
        warningNumber.classList.add("none")
        numberInput.style.outline = "3px solid hsl(130, 74%, 56%)"

    }



    if (nameInput.value === "") {

        warningName.classList.remove("none")
        nameInput.style.outline = "3px solid red"


    } else if (!nameInput.checkValidity()) {

        warningName.textContent = "Not a valid name"
        warningName.classList.remove("none")
        nameInput.style.outline = "3px solid red"


    } else {
        warningName.classList.add("none")
        nameInput.style.outline = "3px solid hsl(130, 74%, 56%)"

    }



    if (dateMMInput.value === "") {

        warningDate.classList.remove("none")
        dateMMInput.style.outline = "3px solid red"



    } else if (dateMMInput.value > 12) {

        warningDate.textContent = "Not a valid number"
        warningDate.classList.remove("none")
        dateMMInput.style.outline = "3px solid red"


    } else {
        warningDate.classList.add("none")
        dateMMInput.style.outline = "3px solid hsl(130, 74%, 56%)"

    }



    if (dateYYInput.value === "") {

        warningDate.classList.remove("none")
        dateYYInput.style.outline = "3px solid red"



    } else if (dateYYInput.value <= 21 || dateYYInput.value > 99) {

        warningDate.textContent = "Not a valid number"
        warningDate.classList.remove("none")
        dateYYInput.style.outline = "3px solid red"


    } else {
        warningDate.classList.add("none")
        dateYYInput.style.outline = "3px solid hsl(130, 74%, 56%)"

    }



    if (cvcInput.value === "") {

        warningCVC.classList.remove("none")
        cvcInput.style.outline = "3px solid red"




    } else if (cvcInput.value.length < 3) {

        warningCVC.textContent = "Not a valid number"
        warningCVC.classList.remove("none")
        cvcInput.style.outline = "3px solid red"



    } else {
        warningCVC.classList.add("none")
        cvcInput.style.outline = "3px solid hsl(130, 74%, 56%)"


    }


    if (warningName.classList.contains("none") && warningNumber.classList.contains("none") && warningDate.classList.contains("none") && warningCVC.classList.contains("none")) {

        document.querySelector(".card__main-data").classList.add("none")
        document.querySelector(".thanks-screen").classList.remove("none")
    }



})

