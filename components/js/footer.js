
document.addEventListener("DOMContentLoaded", function () {
    fetch("/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("shared-footer").innerHTML = html;
        })
        .catch(error => {
            console.error("Failed to load shared footer:", error);
        });
});
