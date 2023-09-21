document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // geting user search string
    const searchInput = document.getElementById("searchInput").value;
    console.log("search string",searchInput)
    
    // AJAX request to the index.php file
    fetch("index.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "searchInput=" + encodeURIComponent(searchInput),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("response",data)
            // handle the response data and update div searchResults 
            const searchResults = document.getElementById("searchResults");
            searchResults.innerHTML = ""; // Clear previous results 
            
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});