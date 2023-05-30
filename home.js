var sports = document.getElementById("sports")

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "611e21b7a64f6062ccb6fd1f40414e4c");
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