let choicePln = document.querySelector(".js-formChoice__input--pln");
let choiceOtherCurrency = document.querySelector(".js-formChoice__input--otherCurrency");
let formPln = document.querySelector(".js-form--pln");
let formOtherCurrency = document.querySelector(".js-form--otherCurrency");

choicePln.addEventListener("click", () => {
    if (choicePln.checked) {
        formPln.classList.remove("form--displayNone");
        formOtherCurrency.classList.add("form--displayNone");
    }
});

choiceOtherCurrency.addEventListener("click", () => {
    if (choiceOtherCurrency.checked) {
        formPln.classList.add("form--displayNone");
        formOtherCurrency.classList.remove("form--displayNone");
    }
});

let rateEuro = (2 + Math.random()).toFixed(3);
let rateUsd = (3 + Math.random()).toFixed(3);
let rateGbp = (4 + Math.random()).toFixed(3);
let rateChf = (5 + Math.random()).toFixed(3);


let formElementPln = document.querySelector(".js-form__input--plnAmount");
let formSelectPln = document.querySelector(".js-form__select--pln");
let currencyEuro = document.querySelector(".js-form__option--euro");
let currencyUsd = document.querySelector(".js-form__option--usd");
let currencyGbp = document.querySelector(".js-form__option--gbp");
let currencyChf = document.querySelector(".js-form__option--chf");
let finaleResultPln = document.querySelector(".js-form__amountFinal--pln");
let elementCurrency = document.querySelector(".js-form__currency--pln");



formPln.addEventListener("submit", (event) => {
    event.preventDefault();
    let amountPln = formElementPln.value;
    switch (formSelectPln.value) {
        case currencyEuro.value:
            elementCurrency.innerText = currencyEuro.innerText;
            finaleResultPln.innerText = (amountPln / rateEuro).toFixed(2);
            break;
        case currencyUsd.value:
            elementCurrency.innerText = currencyUsd.innerText;
            finaleResultPln.innerText = (amountPln / rateUsd).toFixed(2);
            break;
        case currencyGbp.value:
            elementCurrency.innerText = currencyGbp.innerText;
            finaleResultPln.innerText = (amountPln / rateGbp).toFixed(2);
            break;
        case currencyChf.value:
            elementCurrency.innerText = currencyChf.innerText;
            finaleResultPln.innerText = (amountPln / rateChf).toFixed(2);
            break;
    };
});


let formSelectOtherCurrency = document.querySelector(".js-form__select--otherCurrency");
let formElementOtherCurrency = document.querySelector(".js-form__input--otherCurrencyAmount");
let currencyEuro2 = document.querySelector(".js-form__option--euro2");
let currencyUsd2 = document.querySelector(".js-form__option--usd2");
let currencyGbp2 = document.querySelector(".js-form__option--gbp2");
let currencyChf2 = document.querySelector(".js-form__option--chf2");
let finaleResultOtherCurrency = document.querySelector(".js-form__amountFinal--otherCurrency");

formOtherCurrency.addEventListener("submit", (event) => {
    event.preventDefault();
    let amountOtherCurrency = formElementOtherCurrency.value;
    switch (formSelectOtherCurrency.value) {
        case currencyEuro2.value:
            finaleResultOtherCurrency.innerText = (amountOtherCurrency * rateEuro).toFixed(2);
            break;
        case currencyUsd2.value:
            finaleResultOtherCurrency.innerText = (amountOtherCurrency * rateUsd).toFixed(2);
            break;
        case currencyGbp.value:
            finaleResultOtherCurrency.innerText = (amountOtherCurrency * rateGbp).toFixed(2);
            break;
        case currencyChf.value:
            finaleResultOtherCurrency.innerText = (amountOtherCurrency * rateChf).toFixed(2);
            break;
    };
});

let rateWrittenEuro = document.querySelector(".js-currencyRate__value--euro");
rateWrittenEuro.innerText = rateEuro;

let rateWrittenUsd = document.querySelector(".js-currencyRate__value--usd");
rateWrittenUsd.innerText = rateUsd;

let rateWrittenGbp = document.querySelector(".js-currencyRate__value--gbp");
rateWrittenGbp.innerText = rateGbp;

let rateWrittenChf = document.querySelector(".js-currencyRate__value--chf");
rateWrittenChf.innerText = rateChf;



