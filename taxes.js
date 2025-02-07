function doTaxes() {
    const incomeInp = document.getElementById("input");
    const income = parseInt(incomeInp.value, 10);
    const output = document.getElementById("tax");
    const output2 = document.getElementById("percentpaid");
    var taxAmt = 0;
    var percentPaid = 0;
    console.log(income);
    if (income <= 100) {
        output.innerHTML = "You are not subject to income tax";
    } else if (income <= 600) {
        taxAmt = 0.005 * income;
        output.innerHTML = "Weekly Taxes: $" + taxAmt;
    } else if (income <= 1200) {
        taxAmt = 0.025 * income;
        output.innerHTML = "Weekly Taxes: $" + taxAmt;
    } else if (income <= 3000) {
        taxAmt = 0.04 * income;
        output.innerHTML = "Weekly Taxes: $" + taxAmt;
    } else {
        taxAmt = 0.15 * income;
        output.innerHTML = "Weekly Taxes: $" + taxAmt;
    }
    percentPaid = taxAmt/(income*7) * 100;
    percentPaid = percentPaid.toFixed(2);
    output2.innerHTML = "Percent of weekly income paid: " + percentPaid + "%."
}