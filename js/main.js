let btn = document.querySelector("button");
let textarea = document.querySelector("textarea");

btn.addEventListener("click", async () => {
  const apiKey = "8858e589919f9637c753401184baa939b1d62";
  const url = encodeURIComponent("http://onlineandoza.uz/"); // Encode the URL
  const customAlias = "myCustomAlias"; // Set a custom alias if needed, otherwise remove
  const userDomain = "onlineandoza.uz"; // User domain

  // Corrected API URL
  const cuttlyApiUrl = `http://cutt.ly/api/api.php?key=${apiKey}&short=${url}&name=${customAlias}&userDomain=${userDomain}`;

  try {
    // Make the GET request using the fetch API
    let response = await fetch(cuttlyApiUrl);
    let data = await response.json(); // Convert response to JSON
    console.log(data); // Log the response data
  } catch (error) {
    console.log("An error occurred:", error); // Handle any errors
  }
});
