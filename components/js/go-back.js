//GO BACK ON POLICY============

function goBack() {
    const params = new URLSearchParams(window.location.search);
    const returnUrl = params.get("return");

    if (returnUrl) {
        window.location.href = returnUrl;
    } else {
        history.back();
    }
}