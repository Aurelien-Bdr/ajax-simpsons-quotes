function fetchSimpsonsJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    axios.get(url)
        .then(function (response) {
            return response.data[0]; // response.data instead of response.json() with fetch
        })
        .then(function (simpsons) {
            console.log('data decoded from JSON:', simpsons);

            // Build a block of HTML
            const simpsonsHtml = `
          <h2>${simpsons.character}</h2>
          <img src="${simpsons.image}" />
          <p>${simpsons.quote}</p>
        `;
            document.querySelector('#simpsons-quote').innerHTML = simpsonsHtml;
        });
}

fetchSimpsonsJSON();


document.getElementById("reload").addEventListener("click", reloadQuote);

function reloadQuote() {
    fetchSimpsonsJSON();
}