const link = document.getElementById("button")
link.addEventListener("click", ()=>{
    window.location.href = "https://hailr.app/";
})

const a = document.getElementById("location")
a.href = location.href
document.addEventListener("DOMContentLoaded", function() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    
    const bu = document.getElementById("yourButtonId")
    bu.innerHTML = ua;
    // Check if the user agent is Instagram's webview
    if (/Instagram/.test(ua)) {
        bu.style.display = 'none';
        // Hide the button if opened in Instagram's webview
    }
});
