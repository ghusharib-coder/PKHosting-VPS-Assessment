const billingButtons = document.querySelectorAll(".billing-button");
const currencySelect = document.getElementById("currency");
const priceElements = document.querySelectorAll(".price-value");
const pricePeriods = document.querySelectorAll(".price-period");
const annualTotals = document.querySelectorAll(".annual-total");
const savingsBadges = document.querySelectorAll(".savings-badge");
const announcement = document.getElementById("price-announcement");

let currentPeriod = localStorage.getItem("billingPeriod") || "monthly";
let currentCurrency = localStorage.getItem("currency") || "PKR";

const rates = {
    PKR: 1,
    USD: 278.50,
    GBP: 355.00
};

function formatPrice(amount, currency) {
    if (currency === "PKR") {
        return "Rs " + Math.round(amount).toLocaleString();
    }

    if (currency === "USD") {
        return "$" + amount.toFixed(2);
    }

    return "£" + amount.toFixed(2);
}

function updatePrices() {
    priceElements.forEach((element) => {
        const monthlyPrice = Number(element.dataset.price);

        let price = monthlyPrice;

        if (currentPeriod === "annual") {
            price = (monthlyPrice * 10) / 12;
        }

        price = price / rates[currentCurrency];

        element.textContent = formatPrice(price, currentCurrency);
    });


    pricePeriods.forEach((element) => {
        element.textContent =
            currentPeriod === "annual" ? "/month" : "/month";
    });


    annualTotals.forEach((element, index) => {
        if (currentPeriod === "annual") {
            const monthlyPrice =
                Number(priceElements[index].dataset.price);

            const annualPrice = monthlyPrice * 10;
            const convertedPrice = annualPrice / rates[currentCurrency];

            element.textContent =
                "Annual total: " +
                formatPrice(convertedPrice, currentCurrency);

            element.hidden = false;
        } else {
            element.hidden = true;
        }
    });


    savingsBadges.forEach((element, index) => {
        if (currentPeriod === "annual") {
            const monthlyPrice =
                Number(priceElements[index].dataset.price);

            const normalAnnualPrice = monthlyPrice * 12;
            const annualPrice = monthlyPrice * 10;

            const saving = normalAnnualPrice - annualPrice;
            const convertedSaving = saving / rates[currentCurrency];

            element.textContent =
                "Save " +
                formatPrice(convertedSaving, currentCurrency);

            element.hidden = false;
        } else {
            element.hidden = true;
        }
    });


    billingButtons.forEach((button) => {
        const isActive = button.dataset.period === currentPeriod;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive);
    });


    announcement.textContent =
        currentPeriod === "annual"
            ? "Prices updated to annual billing."
            : "Prices updated to monthly billing.";
}


billingButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentPeriod = button.dataset.period;

        localStorage.setItem("billingPeriod", currentPeriod);

        updatePrices();
    });
});


currencySelect.addEventListener("change", () => {
    currentCurrency = currencySelect.value;

    localStorage.setItem("currency", currentCurrency);

    updatePrices();
});


currencySelect.value = currentCurrency;

updatePrices();