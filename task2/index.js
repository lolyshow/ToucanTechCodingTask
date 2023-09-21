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
            // if (data.length === 0) {
            //     searchResults.textContent = "No results found.";
            // } else {
            //     data.forEach((result) => {
            //         // Create and append result elements (e.g., div, p) to searchResults
            //         const resultDiv = document.createElement("div");
            //         resultDiv.className = "result";
            //         const firstName = document.createElement("p");
            //         firstName.textContent = "First Name: " + result.firstName;
            //         const lastName = document.createElement("p");
            //         lastName.textContent = "Last Name: " + result.lastName;
            //         const email = document.createElement("p");
            //         email.textContent = "Email: " + result.email;
            //         resultDiv.appendChild(firstName);
            //         resultDiv.appendChild(lastName);
            //         resultDiv.appendChild(email);
            //         searchResults.appendChild(resultDiv);
            //     });
            // }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});