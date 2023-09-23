const loadingDiv = document.getElementById("loading-div");

setTimeout(() => {
    loadingDiv.style.display = "none";
}, 1900)

setTimeout(() => {
    document.body.style.overflowY = "scroll";
}, 1000)