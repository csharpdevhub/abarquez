
/* =========================================================
   PRODUCT SEARCH + FILTER
========================================================= */

function filterProducts() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const category =
        document
        .getElementById("categoryFilter")
        .value;

    const stock =
        document
        .getElementById("stockFilter")
        .value;

    const rows =
        document
        .querySelectorAll("#productTable tr");


    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();

        const rowCategory =
            row.dataset.category;

        const rowStock =
            row.dataset.stock;


        const matchesSearch =
            text.includes(search);

        const matchesCategory =
            category === "all" ||
            rowCategory === category;

        const matchesStock =
            stock === "all" ||
            rowStock === stock;


        if (
            matchesSearch &&
            matchesCategory &&
            matchesStock
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}


/* =========================================================
   TABLE ACTION DEMO
========================================================= */

document
.querySelectorAll(".action-btn")
.forEach(button => {

    button.addEventListener("click", function() {

        const row =
            this.closest("tr");

        const product =
            row.querySelector(".product-name")
            ?.textContent;

        alert(
            "Product action selected:\n\n" +
            product +
            "\n\nThis demo can be connected to a real database and CRUD backend."
        );

    });

});


/* =========================================================
   SIMPLE REVEAL ANIMATION
========================================================= */

const observer =
new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

        }

    });

},
{
    threshold: .1
});


document
.querySelectorAll(
    ".feature-card, .category-card, .workflow-card"
)
.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});