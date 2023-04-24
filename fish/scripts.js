const searchBox = document.getElementById("search-box");
searchBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        alert("你被我盜了，準備一百萬打我卡裡");
    }
});