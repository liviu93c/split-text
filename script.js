const splitBtn = document.getElementById("splitBtn");
splitBtn.addEventListener("click", function() {
    const inputTextElement = document.getElementById("inputText"); // Get the input element
    const inputText = inputTextElement.value.trim(); // Moved inside the event listener and trimmed
    const words = inputText.match(/\(([^)]+)\)|\b\w+\b/g); // Match words within parentheses and standalone words
    let outputList = document.getElementById("outputList");
    outputList.innerHTML = ""; // Clear previous list items
    if (words) {
        words.forEach(function(word) {
            // Remove parentheses if present
            const cleanedWord = word.replace(/^\(|\)$/g, '');
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(cleanedWord.trim())); // Trim whitespace
            outputList.appendChild(li);
        });
    }
    inputTextElement.value = ""; // Clear the input area
    
});
function copyText() {
    let outputList = document.getElementById("outputList").innerText;
    navigator.clipboard.writeText(outputList).then(
        function() {
            let alertBox = document.getElementById("copyAlert");
            alertBox.style.display = "block";

            let rightContainer = document.getElementById('counted');
            let listItems = document.querySelectorAll("li").length;
            rightContainer.innerHTML = listItems;

            setTimeout(function() {
                alertBox.style.display = "none";
            }, 15000);
            
        },
        function() {
            alert("Copy failed. Please try again.");
        }
    );
}

