document.addEventListener("DOMContentLoaded", function() {
    const nextBtn = document.getElementById("btnNext");

    nextBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const forms = document.querySelectorAll(".travelerForm:not([style*='display: none'])");
        let ok = true;

        forms.forEach(f => {
        if (!f.checkValidity()) {
            f.reportValidity();
            ok = false;
        }
        });

        if (ok) {
        window.location.href = "../Public/sumBooking.html";
        }
    });
});
