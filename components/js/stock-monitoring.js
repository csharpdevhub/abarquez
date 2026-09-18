
/* =========================================================
   SEARCH PRODUCTS
========================================================= */

function searchProducts() {

    const input =
        document
        .getElementById("productSearch")
        .value
        .toLowerCase();

    const rows =
        document
        .querySelectorAll("#stockTable tbody tr");

    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();

        row.style.display =
            text.includes(input)
            ? ""
            : "none";

    });

}


/* =========================================================
   FILTER STOCK
========================================================= */

function filterStock() {

    const filter =
        document
        .getElementById("stockFilter")
        .value;

    const rows =
        document
        .querySelectorAll("#stockTable tbody tr");

    rows.forEach(row => {

        const status =
            row.dataset.status;

        if (
            filter === "all" ||
            status === filter
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}


/* =========================================================
   REFRESH DASHBOARD
========================================================= */

function refreshDashboard() {

    const button =
        event.currentTarget;

    const original =
        button.innerHTML;

    button.innerHTML =
        "⟳ Refreshing...";

    button.disabled = true;

    setTimeout(() => {

        button.innerHTML =
            "✓ Updated";

        button.style.color =
            "var(--green)";

        setTimeout(() => {

            button.innerHTML =
                original;

            button.disabled =
                false;

            button.style.color =
                "";

        }, 1200);

    }, 900);

}


/* =========================================================
   CHANGE PERIOD
========================================================= */

function changePeriod(select) {

    const bars =
        document.querySelectorAll(".bar");

    if (
        select.value === "Last 30 days"
    ) {

        bars.forEach((bar, index) => {

            const heights =
                [48,62,57,70,67,81,90];

            bar.style.setProperty(
                "--height",
                heights[index] + "%"
            );

        });

    } else if (
        select.value === "Last 90 days"
    ) {

        bars.forEach((bar, index) => {

            const heights =
                [42,56,51,64,61,76,85];

            bar.style.setProperty(
                "--height",
                heights[index] + "%"
            );

        });

    } else {

        bars.forEach((bar, index) => {

            const heights =
                [55,68,61,76,71,86,94];

            bar.style.setProperty(
                "--height",
                heights[index] + "%"
            );

        });

    }

}


/* =========================================================
   ADD STOCK DEMO
========================================================= */

function showStockModal() {

    alert(
        "Stock Entry\n\n" +
        "This demo button can be connected to your " +
        "Product Management / Stock Transaction module."
    );

}


/* =========================================================
   SMALL LIVE UPDATE EFFECT
========================================================= */

setInterval(() => {

    const live =
        document.querySelector(".live-dot");

    live.style.opacity =
        live.style.opacity === "0.4"
        ? "1"
        : "0.4";

}, 1800);




const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navLinks.classList.remove("active");

    });

});