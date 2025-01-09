document.addEventListener("DOMContentLoaded", function () {
    var p1 = document.getElementById("p1");
    var words = p1.innerText.split(" ");
    
    var highlightedText = words
        .map(word => word.length > 8 ? `<span class="highlight">${word}</span>` : word)
        .join(" ");
    
    p1.innerHTML = highlightedText; 
});
