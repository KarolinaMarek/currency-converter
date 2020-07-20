{
    const choicePln = document.querySelector(".js-formChoice__input--pln");
    const choiceOtherCurrency = document.querySelector(".js-formChoice__input--otherCurrency");
    const formPln = document.querySelector(".js-form--pln");
    const formOtherCurrency = document.querySelector(".js-form--otherCurrency");

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

    const rate = number => (number + Math.random()).toFixed(3);

    const rateEuro = rate(2);
    const rateUsd = rate(3);
    const rateGbp = rate(4);
    const rateChf = rate(5);

    formPln.addEventListener("submit", (event) => {
        event.preventDefault();
        const formElementPln = document.querySelector(".js-form__input--plnAmount");
        const formSelectPln = document.querySelector(".js-form__select--pln");
        const finaleResultPln = document.querySelector(".js-form__amountFinal--pln");
        const elementCurrency = document.querySelector(".js-form__currency--pln");
        const currency = formSelectPln.value;
        const finaleResult = (rate) => {
            const amountPln = formElementPln.value;
            elementCurrency.innerText = currency;
            finaleResultPln.innerText = (amountPln / rate).toFixed(2);
        };
        switch (currency) {
            case "EURO":
                finaleResult(rateEuro);
                break;
            case "USD":
                finaleResult(rateUsd);
                break;
            case "GBP":
                finaleResult(rateGbp);
                break;
            case "CHF":
                finaleResult(rateChf);
                break;
        };
    });

    formOtherCurrency.addEventListener("submit", (event) => {
        event.preventDefault();
        const formSelectOtherCurrency = document.querySelector(".js-form__select--otherCurrency");
        const formElementOtherCurrency = document.querySelector(".js-form__input--otherCurrencyAmount");
        const finaleResultOtherCurrency = document.querySelector(".js-form__amountFinal--otherCurrency");
        const currency = formSelectOtherCurrency.value;

        const finaleResult = (rate) => {
            const amountOtherCurrency = formElementOtherCurrency.value;
            const final = (amountOtherCurrency * rate).toFixed(2);
            finaleResultOtherCurrency.innerText = final;
        };
        switch (currency) {
            case "EURO":
                finaleResult(rateEuro);
                break;
            case "USD":
                finaleResult(rateUsd);
                break;
            case "GBP":
                finaleResult(rateGbp);
                break;
            case "CHF":
                finaleResult(rateChf);
                break;
        };
    });

    const rateWritten = (rateWritten, rate) => {
        rateWritten.innerText = rate;
    };

    const rateWrittenEuro = document.querySelector(".js-currencyRate__value--euro");
    const rateWrittenUsd = document.querySelector(".js-currencyRate__value--usd");
    const rateWrittenGbp = document.querySelector(".js-currencyRate__value--gbp");
    const rateWrittenChf = document.querySelector(".js-currencyRate__value--chf");

    rateWritten(rateWrittenEuro, rateEuro);
    rateWritten(rateWrittenUsd, rateUsd);
    rateWritten(rateWrittenGbp, rateGbp);
    rateWritten(rateWrittenChf, rateChf);


}