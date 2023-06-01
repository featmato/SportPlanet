/*var sports = document.getElementById("sports")

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "");
myHeaders.append("x-rapidapi-host", "v1.hockey.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v1.hockey.api-sports.io/countries", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/

const apiKey = ''; // Replace with your API key
const apiUrl = 'v1.hockey.api-sports.io'; // Replace with the API URL

// Function to fetch live scores
async function getLiveScores() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch live scores');
    }
    
    const data = await response.json();
    
    // Process the live scores data
    // ...
    
    console.log(data); // Log the live scores data to the console
    
  } catch (error) {
    console.error(error);
  }
}

// Call the function to fetch live scores
getLiveScores();