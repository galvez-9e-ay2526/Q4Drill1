function classifyConsumption() {
    let input = document.getElementById("kWhInput").value;
    let kwh = Number(input);

    let error = document.getElementById("errorMSG");

    if (input === "" || isNaN(kwh)) {
        error.innerHTML = "Please enter a valid number.";
        return;
}

    error.innerHTML = " ";
    let result = " ";

    if (kwh <= 100) {
        result = "Lifeline Consumer: Discounted electrictiy rates.";
    }
    else if (kwh <= 200) {
        result = "Low Consumption; Normal residential rate.";
    }
    else if (kwh <= 300) {
        result = "Average COnsumption: Typical electrictiy usage.";
    }
    else if (kwh <= 500) {
        result = "High Consumption: Higher electrictiy usage.";
    }
    else {
        result = "Very High Consumption: Heavy electrictiy users.";
    }
    window.alert(result);
}