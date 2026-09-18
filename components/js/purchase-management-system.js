
/* =========================================================
   SEARCH + FILTER
========================================================= */

function filterOrders() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const status =
        document
        .getElementById("statusFilter")
        .value;

    const rows =
        document.querySelectorAll(
            "#orderTable tr"
        );

    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();

        const rowStatus =
            row.dataset.status;

        const matchesSearch =
            text.includes(search);

        const matchesStatus =
            status === "all" ||
            rowStatus === status;

        row.style.display =
            matchesSearch && matchesStatus
            ? ""
            : "none";

    });

}


/* =========================================================
   MODAL
========================================================= */

function openModal() {

    document
        .getElementById("purchaseModal")
        .classList.add("active");

}


function closeModal() {

    document
        .getElementById("purchaseModal")
        .classList.remove("active");

}


function createPurchase() {

    alert(
        "Purchase Order created successfully.\n\n" +
        "This demonstration can be connected to a " +
        "real database and backend API."
    );

    closeModal();

}


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================================= */

document
.getElementById("purchaseModal")
.addEventListener("click", function(e) {

    if (e.target === this) {
        closeModal();
    }

});


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        closeModal();
    }

});







//nav hamburger

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

});


// Close menu when a link is clicked

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navLinks.classList.remove("active");

    });

});