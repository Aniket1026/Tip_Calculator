let bill = document.getElementById("bill_input");
let people = document.getElementById("number_of_people");
let percent = document.querySelectorAll(".buttons");
let tip = document.getElementById("tip_amount");
let total = document.getElementById("bill_total");
let custom = document.getElementById("custom");
let reset = document.getElementsByClassName("reset")[0];
let resetMode = false;

percent.forEach(function (btn) {
    btn.addEventListener("click", handleClick);
});


function tipSplit(billAmount, amtPeople, percentage) {
    billAmount = parseFloat(bill.value);
    amtPeople = parseFloat(people.value);

    if (custom.value) {
        percentage = parseInt(custom.value) / 100;
        if (billAmount && amtPeople) {
            let tipPerPerson = (billAmount * percentage) / amtPeople;
            let totalPerPerson = (billAmount / amtPeople) + tipPerPerson;
            tip.innerHTML = "$" + tipPerPerson.toFixed(2);
            total.innerHTML = "$" + totalPerPerson.toFixed(2);
        }
    }
    
    else if (billAmount && amtPeople && percentage) {
        let tipPerPerson = (billAmount * percentage) / amtPeople;
        let totalPerPerson = (billAmount / amtPeople) + tipPerPerson;
        tip.innerText = "$" + tipPerPerson.toFixed(2);
        total.innerText = "$" + totalPerPerson.toFixed(2);
    }

}

function handleClick(event) {
    percent.forEach(function (btn) {
        btn.classList.remove("active");
        if (event.target.innerHTML == btn.innerHTML) {
            btn.classList.add("active");
            percentage = parseInt(btn.innerHTML) / 100;
        }
    });
}

bill.addEventListener("change", tipSplit)

people.addEventListener("change", tipSplit)

custom.addEventListener("change" , tipSplit)

percent.forEach((btn) => {
    btn.addEventListener("click", function () {
        let btns = parseInt(btn.innerText) / 100;
        tipSplit(bill, people, btns)
    })
});

reset.addEventListener("mousedown", function () {
    tip.innerText = "$ 0.00";
    total.innerText = "$ 0.00";
    bill.value = "";
    people.value = "";
    custom.value = "";
    reset.style.background = "#314c87";
    reset.style.color = "#ffffff";
    resetMode = true;
});

reset.addEventListener("mouseup", function () {
    reset.style.background = "#77a1fc";
    reset.style.color = "#031a4b";
    resetMode = false;
});