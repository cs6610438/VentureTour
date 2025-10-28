const pricePerPerson = 25990;

function showTravelerForms(qty) {
    for (let i = 1; i <= 10; i++) {
        const form = document.getElementById(`traveler${i}`);
        if (form) {
        form.style.display = i <= qty ? "block" : "none";
        }
    }
}

function changeQty(num) {
    let qty = parseInt(document.getElementById('qty').value);
    qty += num;
    if (qty < 1) qty = 1;
    if (qty > 10) qty = 10;

    document.getElementById('qty').value = qty;
    document.getElementById('showQty').innerText = qty;

    showTravelerForms(qty);
    updateSummary();
}

function updateSummary() {
    const qty = parseInt(document.getElementById('qty').value);
    const total = qty * pricePerPerson;
    document.getElementById('total').innerText = total.toLocaleString() + " Baht";
}

window.onload = function() {
    document.getElementById("perPerson").innerText = pricePerPerson.toLocaleString();

    const summaryBox = document.querySelector(".summary .sumBox");
    const notice = document.createElement("p");
    notice.id = "loadMessage";
    notice.innerText = "Please enter traveler information..";
    summaryBox.appendChild(notice);

    showTravelerForms(1); 
    updateSummary();
};
