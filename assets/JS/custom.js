//Make a reusable Function

/* the below method is one way to handle it
function update() {

    document.getElementById("wrapper").oninput = function () {
        var bill = document.getElementById("yourBill").value;
        var tipPercent = document.getElementById("tipInput").value;
        var split = document.getElementById("splitInput").value;
        console.log({
            bill,
            tipPercent,
            split
        });
    }

}

update();

*/

function makeCurrency(value) {
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return "$ " + value;
}

//This is another way

//create update()
function update() {
    //create DOM containers
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;

    //bill calculation
    let tipValue = bill * (tipPercent / 100);
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split;

    //set the value
    document.getElementById("tipPercent").innerHTML = tipPercent + ' %';
    document.getElementById("tipValue").innerHTML = makeCurrency(tipValue);
    document.getElementById("totalWithTip").innerHTML = makeCurrency(bill + tipValue);

    document.getElementById("splitValue").innerHTML = split + " people";
    document.getElementById("billEach").innerHTML = makeCurrency(newBillEach);
    document.getElementById("tipEach").innerHTML = makeCurrency(tipEach);
}

//create wrapper container
//then create event listner
let wrapper = document.getElementById("wrapper");

wrapper.addEventListener("input", update);