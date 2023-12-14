const link = document.getElementById("button")
link.addEventListener("click", ()=>{
    window.location.href = "https://hailr.app/";
})

const a = document.getElementById("location")
a.href = location.href
document.addEventListener("DOMContentLoaded", function() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    
    // Check if the user agent is Instagram's webview
    if (/Instagram/.test(ua)) {
        // Hide the button if opened in Instagram's webview
        document.getElementById("yourButtonId").style.display = 'none';
    }
});
